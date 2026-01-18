import sql from '@/lib/db';

/**
 * Read projects from Database
 */
export async function getProjects() {
    try {
        const projects = await sql`SELECT * FROM projects ORDER BY id ASC`;
        return projects;
    } catch (error) {
        console.error('Error reading projects from DB:', error);
        // Fallback or initialization might be needed here, but usually sytem-wide init is better
        return [];
    }
}

/**
 * Get a single project by ID
 */
export async function getProjectById(id) {
    try {
        const projects = await sql`SELECT * FROM projects WHERE id = ${parseInt(id)}`;
        return projects[0] || null;
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        return null;
    }
}

/**
 * Add a new project
 */
export async function addProject(projectData) {
    try {
        const { client, category, link, theme } = projectData;
        const result = await sql`
            INSERT INTO projects (client, category, link, theme)
            VALUES (${client}, ${category}, ${link}, ${theme})
            RETURNING *
        `;
        return result[0];
    } catch (error) {
        console.error('Error adding project:', error);
        return null;
    }
}

/**
 * Update an existing project
 */
export async function updateProject(id, projectData) {
    try {
        const { client, category, link, theme } = projectData;
        const result = await sql`
            UPDATE projects
            SET client = ${client}, category = ${category}, link = ${link}, theme = ${theme}
            WHERE id = ${parseInt(id)}
            RETURNING *
        `;
        return result[0] || null;
    } catch (error) {
        console.error('Error updating project:', error);
        return null;
    }
}

/**
 * Delete a project
 */
export async function deleteProject(id) {
    try {
        const result = await sql`
            DELETE FROM projects
            WHERE id = ${parseInt(id)}
            RETURNING id
        `;
        return result.length > 0;
    } catch (error) {
        console.error('Error deleting project:', error);
        return false;
    }
}
