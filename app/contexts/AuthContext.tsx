import { createContext } from "react";
import { signInRequest } from "../services/auth";
import { setCookie } from 'nookies'

type AuthContextType = {
    isAuthenticade: boolean;
}

type SignInData = {
    email: string;
    password: string;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const isAuthenticade = false;

    async function signIn({ email, password}: SignInData) {
        const { token, user } = await signInRequest({
            email,
            password
        });

        setCookie(undefined, 'access_token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticade }}>
            {children}
        </AuthContext.Provider>
    );
}
