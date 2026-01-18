import fs from 'fs';
import path from 'path';

const servicesFilePath = path.join(process.cwd(), 'data', 'services.json');

/**
 * Read services from JSON file
 */
export function getServices() {
    try {
        const fileContents = fs.readFileSync(servicesFilePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading services:', error);
        return [];
    }
}

/**
 * Write services to JSON file
 */
export function saveServices(services) {
    try {
        fs.writeFileSync(servicesFilePath, JSON.stringify(services, null, 4), 'utf8');
        return true;
    } catch (error) {
        console.error('Error saving services:', error);
        return false;
    }
}

/**
 * Get a single service by ID
 */
export function getServiceById(id) {
    const services = getServices();
    return services.find(s => s.id === id);
}

/**
 * Add a new service
 */
export function addService(serviceData) {
    const services = getServices();
    // Generate a slug-like id from title if not provided
    const id = serviceData.id || serviceData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newService = { ...serviceData, id };
    services.push(newService);
    saveServices(services);
    return newService;
}

/**
 * Update an existing service
 */
export function updateService(id, serviceData) {
    const services = getServices();
    const index = services.findIndex(s => s.id === id);
    if (index === -1) return null;

    services[index] = { ...services[index], ...serviceData, id }; // Ensure id stays same
    saveServices(services);
    return services[index];
}

/**
 * Delete a service
 */
export function deleteService(id) {
    const services = getServices();
    const filteredServices = services.filter(s => s.id !== id);
    if (filteredServices.length === services.length) return false;

    saveServices(filteredServices);
    return true;
}
