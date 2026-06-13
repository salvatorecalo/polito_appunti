"use client"

import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import { CategoryKey } from "@/app/(utils)/db/model/course_and_sub_types"
import Link from "next/link"

interface CategoryListClientProp {
    categories_it: Record<CategoryKey, string>,
    categories_en: Record<CategoryKey, string>
    backgrounds: Record<string, string>
}

export function CategoryListClient({categories_it, categories_en, backgrounds}: CategoryListClientProp){
    const {lang} = useTranslation()

    return (
        <section className="categories-list">
            {
                Object.entries(lang === "it" ? categories_it : categories_en).map(([key, label]) =>
                    key !== "dummy" ? (
                        <Link
                            key={key}
                            href={`/category/${key}`}
                            className="category-link"
                            style={{
                                '--category-bg': backgrounds[key],
                                '--category-hover-bg': backgrounds[`${key}-dark`],
                            } as React.CSSProperties}
                        >
                            {label}
                        </Link>
                    ) : null
                )
            }
        </section>
    )
}