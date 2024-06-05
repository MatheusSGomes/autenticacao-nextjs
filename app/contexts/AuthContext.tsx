import { createContext } from "react";
import { signInRequest } from "../services/auth";

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
    }

    return (
        <AuthContext.Provider value={{ isAuthenticade }}>
            {children}
        </AuthContext.Provider>
    );
}
