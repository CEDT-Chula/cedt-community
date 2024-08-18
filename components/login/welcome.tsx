"use client";
import { pageWording } from "@/config/wording";
import { Logo } from "../icons";

export default function LogoAndWelcomeBackMessage() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <div className="flex justify-center">
        <Logo size={115} />
      </div>
      <div>
        <p className="text-sm md:text-3xl mb-3 font-medium">
          {pageWording.login.hero.title1}
        </p>
      </div>
      <span className="flex gap-0 justify-center mb-5">
        <h1 className="text-primary">{pageWording.login.hero.title2}&nbsp;</h1>
        <h1 className="text-inherit">{pageWording.login.hero.title3}&nbsp;</h1>
      </span>
    </div>
  );
}
