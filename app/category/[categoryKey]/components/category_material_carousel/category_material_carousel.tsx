import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";
import { CategoryMaterialCard } from "./components/category_material_card";
import { CategoryMaterialCarouselTitle } from "./components/category_material_carousel_title/category_material_carousel_title";
import { NoDocumentsSection } from "../no_documents_section/no_documents_section";

interface MaterialCarouselProp {
    materialType: FormattedLink[],
}

export function CategoryMaterialCarousel({ materialType }: MaterialCarouselProp) {
    return (
        <>
            {materialType ? (
                <>
                    <CategoryMaterialCarouselTitle text={"Materiale"} />
                    <div className="material-carousel">
                        {materialType!.length > 0 ? (
                            materialType!.map((item, idx) => (
                                <CategoryMaterialCard key={`materiale-${item.id || idx}`} item={item} idx={idx.toString()} />
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