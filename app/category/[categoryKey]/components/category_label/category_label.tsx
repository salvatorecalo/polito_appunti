"use client"

import { useTranslation } from "@/app/(utils)/context/language_context/language_context";
import { AppConfig } from "@/app/server_actions/get_app_config/models/app_config_model";

interface CategoryLabelProps {
    appConfig: AppConfig;
    categoryKey: string;
    bgColor: string;
}

export function CategoryLabel({appConfig, categoryKey, bgColor}: CategoryLabelProps) {
    const {lang} = useTranslation();
    
    let label = lang === "it" 
        ? appConfig.categories_it[categoryKey as keyof typeof appConfig.categories_it] 
        : appConfig.categories_en[categoryKey as keyof typeof appConfig.categories_en];
    
    if (!label) {
        const subcats = lang === "it" ? appConfig.subcats_it : appConfig.subcats_en;
        
        for (const group of Object.values(subcats)) {
            const subcatGroup = group as Record<string, string>;
            if (subcatGroup[categoryKey]) {
                label = subcatGroup[categoryKey];
                break;
            }
        }
    }

    const finalLabel = label || (lang === "it" ? "Categoria Sconosciuta" : "Unknown Category");

    return (
        <hgroup style={{ background: bgColor }}>
            <h2>{finalLabel}</h2>
        </hgroup>
    );
}