'use client';

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <p className="text-black text-center font-medium mt-5 text-2xl">
                Dashboard privado
            </p>
            <img src={user?.avatar_url} alt="avatar" />
        </div>
    );
}