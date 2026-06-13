"use client"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context"

export function ChangeLanguageButton(){
    const {lang, setLang} = useTranslation()
    return (
        <button onClick={() => setLang(lang === "it" ? "en" : "it")}>{lang}</button>
    )
}