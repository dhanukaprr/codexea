import { NextResponse } from 'next/server';
import { getServices, addService } from '@/app/data/services';
import { revalidatePath } from 'next/cache';

export async function GET() {
    try {
        const services = await getServices();
        return NextResponse.json(services);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.title || !data.description || !data.theme) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newService = await addService(data);
        revalidatePath('/services');
        revalidatePath('/'); // Services also appear on home

        return NextResponse.json(newService, { status: 201 });
    } catch (error) {
        console.error('Add service error:', error);
        return NextResponse.json({ error: 'Failed to add service' }, { status: 500 });
    }
}
