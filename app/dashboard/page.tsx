'use client';

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const { 'access_token': token } = parseCookies();
    const router = useRouter();

    if (!token) {
        router.push('/');
        return null;
    }

    return (
        <div>
            <p className="text-black text-center font-medium mt-5 text-2xl">
                Dashboard privado
            </p>
            <img src={user?.avatar_url} alt="avatar" />
        </div>
    );
}
