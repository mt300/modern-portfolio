'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'pt'
type TranslationData = typeof import('../locales/en.json')

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  translations: TranslationData
}>({
  language: 'en',
  setLanguage: () => {},
  translations: {} as TranslationData,
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')
  const [translations, setTranslations] = useState<TranslationData>({} as TranslationData)

  useEffect(() => {
    import(`../locales/${language}.json`).then(setTranslations)
  }, [language])
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
