import { getServices } from '@/app/data/services';
import { getProjects } from '@/app/data/projects';

export default function sitemap() {
    const baseUrl = 'https://codexea.com';
    const services = getServices();
    const projects = getProjects();

    // Static Routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic Service Routes
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Dynamic Project Routes (if any specific detail pages exist, but for now we link to the portfolio anchors or external sites)
    // Note: Project links in projects.json are currently external or full URLs.
    // If you had internal project pages, you would add them here.

    return [...staticRoutes, ...serviceRoutes];
}
