'use server';
import { db, auth } from '@/firebase/admin';
import { cookies } from 'next/headers';

export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();
        if(userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please sign in instead.' 
            }
        }

        await db.collection('users').doc(uid).set({
            name, email
        })

        return {
            success: true,
            message: 'User created successfully. Please sign in.'
        }
        
    } catch(e: any) {
        console.log('Error creating a user',e);
        if(e.code === 'auth/email-already-exists') {
            return {
                success: false,
                error: 'This email is already in use'
            }
        }

        return {
            success: false,
            error: 'Something went wrong.'
        }
    }
}

export async function signIn(params: SignInParams) {
    const {email, idToken} = params;

    try {
        const userRecord = await auth.getUserByEmail(email);

        if(!userRecord) {
            return {
                success: false,
                error: 'User not found. Create an account instead.'
            }
        }

        await setSessionCookie(idToken);
        
    } catch(e) {
        console.log('Error signing in', e);
        return {
            success: false,
            error: 'Something went wrong.'
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn: 60 * 60 * 24 * 7 * 1000});
    
    cookieStore.set('session', sessionCookie, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/', 
        sameSite: 'lax'
    })
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie);
        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();

        if(!userRecord.exists) {
            return null;
        }

        return {
            ...userRecord.data(),
            id: userRecord.id
        } as User;
            
    } catch(e) {
        console.log('Error getting current user', e);
        return null;
    }
    
}

export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}

export async function signOut() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    return { success: true };
}

