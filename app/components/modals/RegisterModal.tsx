"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import apiService from "@/app/services/apiService";
import Modal from "./Modal";
import { handleLogin } from "@/app/lib/action";

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState<string[]>([]);

  const onSubmitRegister = async () => {
    const formData = {
      email: email,
      password1: passwordOne,
      password2: passwordTwo,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      registerModal.close();
      router.push("/");
    } else {
      const tempError: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setError(tempError);
    }
  };

  const content = (
    <>
      <form action={onSubmitRegister} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Please enter email address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPasswordOne(e.target.value)}
          type="password"
          placeholder="Please enter password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPasswordTwo(e.target.value)}
          type="password"
          placeholder="Please re-enter password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
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

        <CustomButton label="submit" onClick={onSubmitRegister} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={registerModal.isOpen}
      close={registerModal.close}
      label="Register"
      content={content}
    />
  );
};

export default RegisterModal;
