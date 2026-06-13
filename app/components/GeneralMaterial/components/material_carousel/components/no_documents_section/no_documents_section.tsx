import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import Image from "next/image"

export function NoDocumentsSection() {
    const {t:translator} = useTranslation()

    return (
        <section className="no-documents-section">
            <Image 
                src="/no_documents.png"
                alt="No documents found"
                width={200}
                loading="eager"
                height={200}
            />
            <p>{translator.categoryPage.noDocuments}</p>
        </section>
    )
}