import { dbSearchBySubCategory } from '@/app/server_actions/db_search/db_search_by_subcategory';
import { CategoryMaterialCarousel } from '../category_material_carousel/category_material_carousel';

interface Props {
  subcatKey: string;
  subcatLabel: string;
  lang: string;
}

export async function SubcategorySection({ subcatKey, subcatLabel, lang }: Props) {
  const data = await dbSearchBySubCategory({ subCategory: subcatKey, lang });
  return (
    <div className="subcategory-section">
      <h2>{subcatLabel}</h2>

      {data.int && (
        <CategoryMaterialCarousel materialType={data.int} text="interno" />
      )}

      {data.ext && (
        <CategoryMaterialCarousel materialType={data.ext} text="esterno" />
      )}
    </div>
  );
}