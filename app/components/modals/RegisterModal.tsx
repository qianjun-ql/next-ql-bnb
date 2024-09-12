"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import apiService from "@/app/services/apiService";
import Modal from "./Modal";

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState<string[]>([]);

  const submitRegister = async () => {
    const formData = {
      email: email,
      passwordOne: passwordOne,
      passwordTwo: passwordTwo,
    };

    const response = await apiService.post("/api/auth/register/", formData);

    if (response.access) {
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
      <form action={submitRegister} className="space-y-4">
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

        <CustomButton label="submit" onClick={() => console.log("click")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={registerModal.isOpen}
      close={registerModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default RegisterModal;
