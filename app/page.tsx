'use client';

import { AuthProvider } from "./contexts/AuthContext";

export default function Home() {

  return (
    <AuthProvider>
      <p>Página principal</p>
    </AuthProvider>
  );
}
