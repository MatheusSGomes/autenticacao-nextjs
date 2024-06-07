'use client';

import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        api.get('/users');
    }, [])

    return (
        <div>
            <p className="text-black text-center font-medium mt-5 text-2xl">
                Dashboard privado
            </p>
            <img src={user?.avatar_url} alt="avatar" />
        </div>
    );
}