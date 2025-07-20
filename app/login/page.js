'use client';

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    const result = await signIn("google", { 
      redirect: false,
      callbackUrl: "/dashboard" 
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login to RoSSys</h1>
        
        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <FcGoogle className="text-xl bg-white rounded-full" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}