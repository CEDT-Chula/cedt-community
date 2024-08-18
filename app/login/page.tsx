"use client";
import LogoAndWelcomeBackMessage from "@/components/login/welcome";
import DefaultCredentialForm from "@/components/login/LoginForm";
import CantLogin from "@/components/login/cantlogin";

export default function Login() {
  return (
    <div>
      <LogoAndWelcomeBackMessage />
      <DefaultCredentialForm />
      <CantLogin />
    </div>
  );
}
