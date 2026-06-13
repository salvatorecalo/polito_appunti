import { NoDocumentsSection } from "@/app/components/GeneralMaterial/components/material_carousel/components/no_documents_section/no_documents_section";
import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";
import { CategoryMaterialCard } from "./components/category_material_card";
import { CategoryMaterialCarouselTitle } from "./components/category_material_carousel_title/category_material_carousel_title";

interface MaterialCarouselProp {
    materialType: FormattedLink[],
    text: string
}

export function CategoryMaterialCarousel({ materialType, text }: MaterialCarouselProp) {
    return (
        <>
            {materialType ? (
                <>
                    <CategoryMaterialCarouselTitle text={text} />
                    <div className="material-carousel">
                        {materialType!.length > 0 ? (
                        materialType!.map((item, idx) => (
                            <CategoryMaterialCard key={`${text}-${item.id || idx}`} item={item} text={text} idx={idx.toString()} />
                        ))
                    ) : (
                            <NoDocumentsSection />
                    )}
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    )
}