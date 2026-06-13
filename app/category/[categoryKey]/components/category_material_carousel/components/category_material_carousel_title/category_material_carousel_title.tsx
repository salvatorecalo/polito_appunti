"use client"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context"

export function CategoryMaterialCarouselTitle({text}: {text: string}){
    const {t:translator} = useTranslation()
    return (
    <h3>{translator.homepage.materialTitle(text)}</h3>
    )
}