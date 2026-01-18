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
        console.log('AUTH: Entering verifyAdminPassword. Input length:', password?.length);

        if (!ADMIN_PASSWORD_HASH) {
            console.log('AUTH: No ADMIN_PASSWORD_HASH environment variable detected.');
            const isMatch = (password === 'Alanturing75!');
            console.log('AUTH: Simple password match result:', isMatch);
            return isMatch;
        }

        let rawHash = ADMIN_PASSWORD_HASH.trim();
        console.log('AUTH: Initial hash length:', rawHash.length);

        // Auto-fix if the user copied the label "Key: $2b$..."
        if (rawHash.includes('$2a$') || rawHash.includes('$2b$')) {
            const index = rawHash.indexOf('$');
            if (index > 0) {
                console.log('AUTH: Prefix detected in hash string, extracting from index:', index);
                rawHash = rawHash.substring(index);
            }
        }

        console.log('AUTH: Final hash to use (first 10):', rawHash.substring(0, 10));
        console.log('AUTH: Final hash length:', rawHash.length);

        const isMatch = await verifyPassword(password, rawHash);
        console.log('AUTH: bcrypt match result:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('AUTH: Critical error in verifyAdminPassword:', error);
        return false;
    }
}
