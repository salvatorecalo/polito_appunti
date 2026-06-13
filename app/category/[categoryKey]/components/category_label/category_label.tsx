"use client"

import { useTranslation } from "@/app/(utils)/context/language_context/language_context";
import { AppConfig } from "@/app/server_actions/get_app_config/models/app_config_model";

interface CategoryLabelProps {
    appConfig: AppConfig,
    categoryKey: string, 
    bgColor: string
}
export function CategoryLabel({appConfig, categoryKey, bgColor}: CategoryLabelProps) {
    const {lang} = useTranslation()
    const label = lang === "it" ? appConfig.categories_it[categoryKey] || "Categoria Sconosciuta" : appConfig.categories_en[categoryKey] || "Unknown Category"

    return (
        <hgroup style={{ background: bgColor }}>
            <h2>{label}</h2>
        </hgroup>
    )
}