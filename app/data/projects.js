import fs from 'fs';
import path from 'path';

const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');

/**
 * Read projects from JSON file
 */
export function getProjects() {
    try {
        const fileContents = fs.readFileSync(projectsFilePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading projects:', error);
        return [];
    }
}

/**
 * Write projects to JSON file
 */
export function saveProjects(projects) {
    try {
        fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 4), 'utf8');
        return true;
    } catch (error) {
        console.error('Error saving projects:', error);
        return false;
    }
}

/**
 * Get a single project by ID
 */
export function getProjectById(id) {
    const projects = getProjects();
    return projects.find(p => p.id === parseInt(id));
}

/**
 * Add a new project
 */
export function addProject(projectData) {
    const projects = getProjects();
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject = { id: newId, ...projectData };
    projects.push(newProject);
    saveProjects(projects);
    return newProject;
}

/**
 * Update an existing project
 */
export function updateProject(id, projectData) {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;

    projects[index] = { ...projects[index], ...projectData, id: parseInt(id) };
    saveProjects(projects);
    return projects[index];
}

/**
 * Delete a project
 */
export function deleteProject(id) {
    const projects = getProjects();
    const filteredProjects = projects.filter(p => p.id !== parseInt(id));
    if (filteredProjects.length === projects.length) return false;

    saveProjects(filteredProjects);
    return true;
}

// Note: Do not export static projects array as it leads to stale data in server components.
// Always use getProjects() to ensure you have the latest data from the JSON file.
