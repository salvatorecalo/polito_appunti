"use client"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import './change_language_button.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function ChangeLanguageButton() {
    const { lang, setLang } = useTranslation()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function changeLang(){
        const newLang = lang === "it" ? "en" : "it"
        setLang(newLang)
        const current = new URLSearchParams(Array.from(searchParams.entries())) 
        current.set("lang", newLang) 

        const search = current.toString()
        const query = search ? `?${search}` : ""
        
        router.push(`${pathname}${query}`)
    }
    return (
        <div className="switch">
            <input 
                id="language-toggle" 
                className="check-toggle check-toggle-round-flat" 
                type="checkbox" 
                checked={lang === "en"}
                onChange={() => changeLang()} 
            />
            <label htmlFor="language-toggle"></label>
            <span className="on">IT</span>
            <span className="off">EN</span>
        </div>
    )
}