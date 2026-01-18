import { NextResponse } from 'next/server';
import { verifyAdminPassword, generateToken } from '@/lib/auth';

export async function POST(request) {
    try {
        const { password } = await request.json();

        if (password && await verifyAdminPassword(password)) {
            const token = await generateToken({ role: 'admin' });

            const response = NextResponse.json({ success: true, message: 'Login successful' });

            response.cookies.set('admin_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            });

            console.log('Login successful, cookie set');
            return response;
        }

        console.log('Login failed: Invalid password');
        return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, message: 'An error occurred during login' }, { status: 500 });
    }
}
