import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error('Error: DATABASE_URL is not set in .env.local');
    process.exit(1);
}

const sql = neon(databaseUrl);

async function migrate() {
    try {
        console.log('Starting migration...');

        // 1. Create Projects Table
        console.log('Creating projects table...');
        await sql`
            CREATE TABLE IF NOT EXISTS projects (
                id SERIAL PRIMARY KEY,
                client TEXT NOT NULL,
                category TEXT NOT NULL,
                link TEXT NOT NULL,
                theme TEXT DEFAULT 'dark'
            )
        `;

        // 2. Create Services Table
        console.log('Creating services table...');
        await sql`
            CREATE TABLE IF NOT EXISTS services (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                theme TEXT DEFAULT 'dark',
                long_description TEXT,
                features TEXT[],
                benefits TEXT[]
            )
        `;

        // 3. Migrate Projects Data
        const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
        if (fs.existsSync(projectsPath)) {
            console.log('Migrating projects data...');
            const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
            for (const project of projects) {
                await sql`
                    INSERT INTO projects (id, client, category, link, theme)
                    VALUES (${project.id}, ${project.client}, ${project.category}, ${project.link}, ${project.theme})
                    ON CONFLICT (id) DO UPDATE SET
                        client = EXCLUDED.client,
                        category = EXCLUDED.category,
                        link = EXCLUDED.link,
                        theme = EXCLUDED.theme
                `;
            }
        }

        // 4. Migrate Services Data
        const servicesPath = path.join(process.cwd(), 'data', 'services.json');
        if (fs.existsSync(servicesPath)) {
            console.log('Migrating services data...');
            const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
            for (const service of services) {
                await sql`
                    INSERT INTO services (id, title, description, theme, long_description, features, benefits)
                    VALUES (${service.id}, ${service.title}, ${service.description}, ${service.theme}, ${service.longDescription}, ${service.features}, ${service.benefits})
                    ON CONFLICT (id) DO UPDATE SET
                        title = EXCLUDED.title,
                        description = EXCLUDED.description,
                        theme = EXCLUDED.theme,
                        long_description = EXCLUDED.long_description,
                        features = EXCLUDED.features,
                        benefits = EXCLUDED.benefits
                `;
            }
        }

        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

migrate();
