import { NextResponse } from 'next/server';
import { getServiceById, updateService, deleteService } from '@/app/data/services';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
    const { id } = await params;
    const service = getServiceById(id);

    if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service);
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const data = await request.json();

        const updated = updateService(id, data);
        if (!updated) {
            return NextResponse.json({ error: 'Service not found or update failed' }, { status: 404 });
        }

        revalidatePath('/services');
        revalidatePath(`/services/${id}`);
        revalidatePath('/');

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const success = deleteService(id);

        if (!success) {
            return NextResponse.json({ error: 'Service not found or deletion failed' }, { status: 404 });
        }

        revalidatePath('/services');
        revalidatePath('/');

        return NextResponse.json({ message: 'Service deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
    }
}
