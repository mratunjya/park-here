import { useRouter } from "next/router";
import { signOut } from "@utils/auth";
import { useEffect } from "react";

const SignOut = () => {
  const router = useRouter();

  useEffect(() => {
    signOut();
  }, []);

  useEffect(() => {
    router.push("/sign-in/user");
  }, [router]);

  return <div>Signing out...</div>;
};

export default SignOut;
