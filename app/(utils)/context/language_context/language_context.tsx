"use client"
import { it } from '../../dictionaries/it'
import { en } from '../../dictionaries/en'
import { createContext, ReactNode, useContext, useState } from 'react'

type Language = "it" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof it
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [lang, setLang] = useState<Language>("it")
    const dictionary = lang === 'it' ? it : en

    return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionary }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used in a LanguageProvider");
  }
  return context;
}