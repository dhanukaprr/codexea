import { NextResponse } from 'next/server';
import { getProjectById, updateProject, deleteProject } from '@/app/data/projects';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
    const { id } = await params;
    const project = await getProjectById(id);

    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const data = await request.json();

        const updated = await updateProject(id, data);
        if (!updated) {
            return NextResponse.json({ error: 'Project not found or update failed' }, { status: 404 });
        }

        revalidatePath('/portfolio');
        revalidatePath('/');
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const success = await deleteProject(id);

        if (!success) {
            return NextResponse.json({ error: 'Project not found or deletion failed' }, { status: 404 });
        }

        revalidatePath('/portfolio');
        return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
    }
}
