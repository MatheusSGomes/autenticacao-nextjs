import { createContext, useState } from "react";
import { signInRequest } from "../services/auth";
import { setCookie } from 'nookies'
import Router from "next/router";

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
    user: User;
    signIn: (data: SignInData) => Promise<void>
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticade = false;

    async function signIn({ email, password}: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password
        });

        setCookie(undefined, 'access_token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        });

        setUser(user);
        Router.push('/dashboard');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticade, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
