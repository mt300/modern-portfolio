'use client';
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { translations } = useLanguage();
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https:///github.com/mt300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={32}
            height={32}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/matheus-tomazi-047712103/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={32}
            height={32}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Resume icon"
            width={32}
            height={32}
          />
          {translations.resume}
        </a>
      </footer>
    );
}