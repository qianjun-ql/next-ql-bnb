"use client";

import { useRouter } from "next/navigation";
import UserNavMenu from "./navbar/UserNavMenu";
import { resetAuthCookies } from "../lib/action";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const onSubmitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };

  return <UserNavMenu label="Logout" onClick={onSubmitLogout} />;
};

export default LogoutButton;
