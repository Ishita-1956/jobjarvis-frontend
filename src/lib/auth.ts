// Auth utility functions for Google OAuth integration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export type UserRole = 'jobseeker' | 'recruiter' | 'admin' | 'employee';

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: UserRole;
    candidate_id?: number;
    company_id?: number;
    company_name?: string;
}

export interface LoginResponse {
    message: string;
    user: User;
    redirect_url?: string;
}

/**
 * Initiates Google OAuth flow by redirecting to the backend OAuth endpoint
 * This endpoint should be configured in the backend to start the Google OAuth flow
 */
export function initiateGoogleOAuth(role: UserRole = 'jobseeker'): void {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('oauth_role', role);
        // Redirect to backend Google OAuth endpoint
        // The backend will handle the OAuth flow with Google
        window.location.href = `${API_BASE_URL}/auth/google-login?role=${role}`;
    }
}

/**
 * Login with email and password (fallback method)
 */
export async function loginWithCredentials(
    email: string,
    password: string,
    role: UserRole
): Promise<{ success: boolean; data?: LoginResponse; error?: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, role }),
            credentials: 'include',
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, error: result.error || 'Login failed' };
        }

        return { success: true, data: result };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}

/**
 * Get redirect URL based on user role and data
 */
export function getRedirectUrl(user: User): string {
    switch (user.role) {
        case 'recruiter':
            return `/dashboard`;
        case 'admin':
            return `/dashboard`;
        case 'jobseeker':
        case 'employee':
            return user.candidate_id
                ? `/dashboard`
                : '/onboarding/individual';
        default:
            return '/';
    }
}

/**
 * Get current user session from backend
 */
export async function getCurrentUser(): Promise<User | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login-success`, {
            credentials: 'include',
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to get current user:', error);
        return null;
    }
}

/**
 * Logout user and clear session
 */
export async function logout(): Promise<void> {
    try {
        await fetch(`${API_BASE_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
    } catch (error) {
        console.error('Logout error:', error);
    }

    if (typeof window !== 'undefined') {
        sessionStorage.clear();
        window.location.href = '/';
    }
}

/**
 * Submit recruiter signup form
 */
export async function signupRecruiter(data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    company_name: string;
    company_location: string;
}): Promise<{ success: boolean; message: string }> {
    try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, message: result.error || 'Signup failed' };
        }

        return { success: true, message: result.message };
    } catch (error) {
        console.error('Signup error:', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
}

/**
 * Submit jobseeker signup form
 */
export async function signupJobseeker(data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
}): Promise<{ success: boolean; message: string }> {
    try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append('role', 'jobseeker');

        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, message: result.error || 'Signup failed' };
        }

        return { success: true, message: result.message };
    } catch (error) {
        console.error('Signup error:', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
}

/**
 * Get terms and conditions
 */
export async function getTerms(): Promise<{ title: string; content: string } | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/terms`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('Failed to get terms:', error);
        return null;
    }
}

/**
 * Get privacy policy
 */
export async function getPrivacyPolicy(): Promise<{ title: string; content: string } | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/privacy`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('Failed to get privacy policy:', error);
        return null;
    }
}
