import { neon } from '@neondatabase/serverless';

// This utility ensures we use the DATABASE_URL environment variable provided by Neon/Netlify
const sql = neon(process.env.DATABASE_URL);

export default sql;
