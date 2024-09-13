"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string[]>([]);

  const onSubmitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };

    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push("/");
    } else {
      setError(response.non_field.errors);
    }
  };

  const content = (
    <>
      <form action={onSubmitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Please enter email address"
          className="w-full h-54 border p-4 border-gray-100 rounded-xl"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Please enter password"
          className="w-full h-54 border p-4 border-gray-100 rounded-xl"
        />
        {error.map((err, index) => {
          return (
            <div
              key={`err_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {err}
            </div>
          );
        })}
        <CustomButton onClick={onSubmitLogin} label="Submit" />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  );
};

export default LoginModal;
