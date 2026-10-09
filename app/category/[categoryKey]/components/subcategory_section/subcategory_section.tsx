import { dbSearchBySubCategory } from '@/app/server_actions/db_search/db_search_by_subcategory';
import { CategoryMaterialCarousel } from '../category_material_carousel/category_material_carousel';
import { UploadMaterialCategory } from '../upload_material_category/upload_material_category';

interface Props {
  categoryKey: string;
  subcatKey: string;
  subcatLabel: string;
  lang: string;
}

export async function SubcategorySection({ categoryKey, subcatKey, subcatLabel, lang }: Props) {
  const {status, error, data} = await dbSearchBySubCategory({ subCategory: subcatKey, lang });

  if (status != 0) {
    return <p>{error.toString()}</p>
  }
  return (
    <div className="subcategory-section">
      <h2>{subcatLabel}</h2>
      <UploadMaterialCategory categoryKey={categoryKey} subCategory={subcatKey}/>
      {data && (
        <CategoryMaterialCarousel materialType={data} />
      )}
    </div>
  );
}