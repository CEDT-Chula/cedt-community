"use client";
import { pageWording } from "@/config/wording";

export default function CantLogin() {
  return (
    <div className="mt-6 text-center">
      <p className="">{pageWording.login.footer.cantlogin}</p>

      <span className="flex gap-0 justify-center mb-5">
        <div>{pageWording.login.footer.contact}&nbsp;</div>
        <div className="underline text-primary">
          <a href={pageWording.login.footer.href} className="text-primary">
            {pageWording.login.footer.here}
          </a>
        </div>
      </span>
    </div>
  );
}
