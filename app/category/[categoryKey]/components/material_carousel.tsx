"use client"
import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";
import { NoDocumentsSection } from "./no_documents_section/no_documents_section";
import { MaterialCard } from "./ material_card/material_card";
import { useTranslation } from "@/app/(utils)/context/language_context/language_context";

interface MaterialCarouselProp {
    materialType: FormattedLink[],
    text: string
}

export function MaterialCarousel({ materialType, text }: MaterialCarouselProp) {
    const {t:translator} = useTranslation()

    return (
        <>
            {materialType ? (
                <>
                    <h3>{translator.homepage.materialTitle(text)}</h3>
                    <div className="material-carousel">
                        {materialType!.length > 0 ? (
                        materialType!.map((item, idx) => (
                            <MaterialCard key={`${text}-${item.id || idx}`} item={item} text={text} idx={idx.toString()} />
                        ))
                    ) : (
                            <NoDocumentsSection />
                    )}
                    </div>
                </>
            ) : (
                <p></p>
            )}
        </>
    )
}