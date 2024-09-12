"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const LoginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Please enter email address"
          className="w-full h-54 border p-4 border-gray-100 rounded-xl"
        />
        <input
          type="password"
          placeholder="Please enter password"
          className="w-full h-54 border p-4 border-gray-100 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton onClick={() => console.log("click")} label="Submit" />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Login"
      content={content}
    />
  );
};

export default LoginModal;
