"use client"

import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name"
import Link from "next/link"

export function GoToMessageButton({item}: {item: FormattedLink}){
    const {t: translator} = useTranslation()

    return (
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                 {translator.general.goToMessage}
        </Link>
    )
}