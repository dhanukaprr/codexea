import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const secret = new TextEncoder().encode(JWT_SECRET);
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token for authentication
 */
export async function generateToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(secret);
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return null;
    }
}

/**
 * Verify admin password
 */
export async function verifyAdminPassword(password) {
    try {
        console.log('AUTH: Checking password. Input length:', password?.length);

        if (!ADMIN_PASSWORD_HASH) {
            console.log('AUTH: No ADMIN_PASSWORD_HASH environment variable detected.');
            // Fallback to plain text check for easier setup if env var is missing
            const isMatch = (password === 'Alanturing75!');
            console.log('AUTH: Simple password match result:', isMatch);
            return isMatch;
        }

        const trimmedHash = ADMIN_PASSWORD_HASH.trim();
        console.log('AUTH: ADMIN_PASSWORD_HASH found. Starts with:', trimmedHash.substring(0, 10));
        console.log('AUTH: Hash total length:', trimmedHash.length);

        const isMatch = await verifyPassword(password, trimmedHash);
        console.log('AUTH: bcrypt match result:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('AUTH: Critical error in verifyAdminPassword:', error);
        return false;
    }
}
