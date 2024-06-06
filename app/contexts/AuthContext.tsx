'use client';

import { createContext, ReactNode, useState } from "react";
import { signInRequest } from "../services/auth";
import { setCookie } from 'nookies'
import { useRouter } from "next/navigation";

type User = {
    name: string,
    email: string,
    avatar_url: string,
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticade: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}

interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const isAuthenticade = !!user;

    async function signIn({ email, password}: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password
        });

        setCookie(undefined, 'access_token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        });

        setUser(user);
        router.push('/dashboard');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticade, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
