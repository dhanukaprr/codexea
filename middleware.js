import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // We only want to protect the dashboard routes, not the login page itself
    // and only the protected API routes.
    const isAdminDashboard = pathname.startsWith('/codexea-admin/dashboard');
    const isProtectedApi = (pathname.startsWith('/api/projects') || pathname.startsWith('/api/services')) &&
        (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE');

    if (isAdminDashboard || isProtectedApi) {
        const token = request.cookies.get('admin_token')?.value;

        if (!token || !(await verifyToken(token))) {
            // Redirect to login page if unauthorized for dashboard
            if (isAdminDashboard) {
                return NextResponse.redirect(new URL('/codexea-admin', request.url));
            }
            // Return error for unauthorized API requests
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/codexea-admin/dashboard/:path*',
        '/api/projects/:path*',
        '/api/services/:path*'
    ],
};
