"use client"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import './change_language_button.css'

export function ChangeLanguageButton() {
    const { lang, setLang } = useTranslation()
    
    return (
        <div className="switch">
            <input 
                id="language-toggle" 
                className="check-toggle check-toggle-round-flat" 
                type="checkbox" 
                checked={lang === "en"}
                onChange={() => setLang(lang === "it" ? "en" : "it")} 
            />
            <label htmlFor="language-toggle"></label>
            <span className="on">IT</span>
            <span className="off">EN</span>
        </div>
    )
}