"use client"
import Link  from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


type MenuItem = {
    title: string;
    link: string;
}


export default function Header() {
    const { translations, setLanguage, language } = useLanguage();
    
    return (
        <header className="flex fixed top-0 left-0 right-0 items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">{translations.title}</h1>
        <nav>
            <ul className="flex space-x-4">
            {
                translations.menu && translations.menu.map((item: MenuItem, index: number) => (
                    <li key={index}>
                        <Link href={`/${item.link}`} className="hover:text-gray-400">
                            {item.title}
                        </Link>
                    </li>
                ))
            }
            <li>
                <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} className="hover:text-gray-400">
                    {language === 'en' ? 'PT' : 'EN'}
                </button>
            </li>
            </ul>
        </nav>
        </header>
    );
}