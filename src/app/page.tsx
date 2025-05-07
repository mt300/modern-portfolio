// 'use client'
// import Image from "next/image";
// import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

export default function Home() {
  // const { translations } = useLanguage();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 mt-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
}
