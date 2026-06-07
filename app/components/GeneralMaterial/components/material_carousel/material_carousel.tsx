import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";
import { NoDocumentsSection } from "./components/no_documents_section/no_documents_section";
import { MaterialCard } from "./components/ material_card/material_card";

interface MaterialCarouselProp {
    materialType: FormattedLink[],
    text: string
}

export function MaterialCarousel({ materialType, text }: MaterialCarouselProp) {
    return (
        <>
            {materialType ? (
                <>
                    <h3>Materiale {text} (al gruppo telegram)</h3>
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