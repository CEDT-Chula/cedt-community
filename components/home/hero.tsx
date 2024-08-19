"use client";
import { pageWording } from "@/config/wording";
import Typewriter from "typewriter-effect";
import { Logo } from "../icons";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";

function SubTitlesTypewriter() {
  return (
    // lock default height, so the page doesn't jump when the text changes
    <h3 className="text-inherit min-h-32 md:min-h-20">
      <Typewriter
        options={{
          strings: pageWording.home.subTitles,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
          stringSplitter: (input: string)=>{
            return Array.from(input) as any as string;
          }
        }}
      />
    </h3>
  );
}

function QuoteSnippet() {
  return (
    <div className="mt-8 m-0 text-sm md:text-base">
      <Snippet hideSymbol hideCopyButton variant="bordered" className="p-0">
        <span className="p-0">
          Welcome to one of the best <Code color="primary">Computer Major</Code>
        </span>
      </Snippet>
    </div>
  );
}

function LogoAndWelcomeMessage() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <div className="flex justify-center m-0 p-0">
        <Logo size={125} />
      </div>
      <span className="flex gap-0 justify-center">
        <h1 className="text-primary">{pageWording.home.heroTitle1}&nbsp;</h1>
        <h1 className="text-inherit">{pageWording.home.heroTitle2}&nbsp;</h1>
      </span>
      <SubTitlesTypewriter />
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <LogoAndWelcomeMessage />
      <QuoteSnippet />
    </>
  );
}
