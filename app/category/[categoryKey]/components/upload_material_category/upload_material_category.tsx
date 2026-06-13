"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/app/(utils)/context/language_context/language_context";

interface UploadMaterialCategory {
    categoryKey: string
}

export function UploadMaterialCategory({categoryKey}: UploadMaterialCategory){
    const {t: translator} = useTranslation()

    return (
        <Link href={`/upload?opt=${categoryKey}`} className="categoryUploadButton">
        <FontAwesomeIcon icon={faUpload} />
        {translator.categoryPage.uploadMaterialForCategory}
      </Link>
    )
}