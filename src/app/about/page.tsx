'use client'
import { useLanguage } from "@/contexts/LanguageContext"
export default function Page() {
    const { translations } = useLanguage()
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 mt-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-[32px] font-bold">About</h1>
                <p className="text-[16px] text-gray-500">{translations.description}</p>
            </main>
        </div>
    )
}