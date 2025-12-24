// app/login/hooks/useLogin.js
"use client";
import { useState } from "react";
import useAuthStore from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui";

export function useLogin() {
  // 1. Select the login action from the store
  const {login} = useAuthStore();
	const { showToast } = useToast()

	const router =  useRouter();

  // 2. Manage only local form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleLogin = async (e) => {
		e.preventDefault();
    setIsSubmitting(true);
		const res = await login(email, password);
    if (res.success) {
			router.push("/admin")
		}else {
			showToast(res.error)
		}
    setIsSubmitting(false);
  };




  return {
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
    handleLogin,
  };
}