import sql from '@/lib/db';

/**
 * Read services from Database
 */
export async function getServices() {
    try {
        const services = await sql`SELECT * FROM services ORDER BY id ASC`;
        return services;
    } catch (error) {
        console.error('Error reading services from DB:', error);
        return [];
    }
}

/**
 * Get a single service by ID
 */
export async function getServiceById(id) {
    try {
        const services = await sql`SELECT * FROM services WHERE id = ${id}`;
        return services[0] || null;
    } catch (error) {
        console.error('Error fetching service by ID:', error);
        return null;
    }
}

/**
 * Add a new service
 */
export async function addService(serviceData) {
    try {
        const { title, description, theme, longDescription, features, benefits } = serviceData;

        // Generate a slug-like id from title if not provided
        const id = serviceData.id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const result = await sql`
            INSERT INTO services (id, title, description, theme, long_description, features, benefits)
            VALUES (${id}, ${title}, ${description}, ${theme}, ${longDescription}, ${features}, ${benefits})
            RETURNING *
        `;
        return result[0];
    } catch (error) {
        console.error('Error adding service:', error);
        return null;
    }
}

/**
 * Update an existing service
 */
export async function updateService(id, serviceData) {
    try {
        const { title, description, theme, longDescription, features, benefits } = serviceData;
        const result = await sql`
            UPDATE services
            SET title = ${title}, description = ${description}, theme = ${theme}, 
                long_description = ${longDescription}, features = ${features}, benefits = ${benefits}
            WHERE id = ${id}
            RETURNING *
        `;
        return result[0] || null;
    } catch (error) {
        console.error('Error updating service:', error);
        return null;
    }
}

/**
 * Delete a service
 */
export async function deleteService(id) {
    try {
        const result = await sql`
            DELETE FROM services
            WHERE id = ${id}
            RETURNING id
        `;
        return result.length > 0;
    } catch (error) {
        console.error('Error deleting service:', error);
        return false;
    }
}
