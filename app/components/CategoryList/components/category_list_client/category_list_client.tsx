"use client"

import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import { CategoryKey } from "@/app/(utils)/db/model/course_and_sub_types"
import { CategoryLink } from "@/app/components/CategoryLink/categoryLink"
import Link from "next/link"

interface CategoryListClientProp {
    categories_it: Record<CategoryKey, string>,
    categories_en: Record<CategoryKey, string>
    backgrounds: Record<string, string>
}

export function CategoryListClient({categories_it, categories_en, backgrounds}: CategoryListClientProp){
    const {lang} = useTranslation()
    
    return (
        <section>
            {
                Object.entries(lang === "it" ? categories_it : categories_en).map(([key, label]) =>
                    key !== "dummy" ? (
                        <CategoryLink key={key} subcatKey={key} lang={lang} backgrounds={backgrounds} bgColor={"#f0740f"} subcatLabel={label} />
                    ) : null
                )
            }
        </section>
    )
}