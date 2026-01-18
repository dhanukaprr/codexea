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
    if (!ADMIN_PASSWORD_HASH) {
        // For development, hash the password on the fly
        console.log('No ADMIN_PASSWORD_HASH set, using default dev password');
        const devHash = await hashPassword('Alanturing75!');
        const isMatch = await verifyPassword(password, devHash);
        console.log('Password match:', isMatch);
        return isMatch;
    }
    const isMatch = await verifyPassword(password, ADMIN_PASSWORD_HASH);
    console.log('Password match:', isMatch);
    return isMatch;
}
