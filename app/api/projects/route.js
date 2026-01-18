import { NextResponse } from 'next/server';
import { getProjects, addProject } from '@/app/data/projects';
import { revalidatePath } from 'next/cache';

export async function GET() {
    try {
        const projects = getProjects();
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.client || !data.category || !data.link || !data.theme) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newProject = addProject(data);
        revalidatePath('/portfolio');

        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        console.error('Add project error:', error);
        return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
    }
}
