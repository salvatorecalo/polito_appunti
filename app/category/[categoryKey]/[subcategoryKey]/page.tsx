import '../CategoryPage.css';
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import { dbSearchByCategory } from '@/app/server_actions/db_search/db_search_by_category';
import { CategoryLabel } from '@/app/category/[categoryKey]/components/category_label/category_label';
import { UploadMaterialCategory } from '../components/upload_material_category/upload_material_category';
import { CategoryMaterialCarousel } from '../components/category_material_carousel/category_material_carousel';
import { NoDocumentsSection } from '../components/no_documents_section/no_documents_section';
import { dbSearchBySubCategory } from '@/app/server_actions/db_search/db_search_by_subcategory';

interface PageProps {
  params: Promise<{ categoryKey: string; subcategoryKey: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SubCategoryPage({ params, searchParams }: PageProps) {
  const { categoryKey, subcategoryKey } = await params;
  console.log(categoryKey, subcategoryKey)
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as string) || "it";
  
  const appConfig = await getAppConfig();
  
  const bgColor = appConfig.backgrounds[categoryKey as keyof typeof appConfig.backgrounds] 
                  || appConfig.backgrounds[subcategoryKey as keyof typeof appConfig.backgrounds] 
                  || "#ED6D33";

  const data = await dbSearchBySubCategory({ subCategory: subcategoryKey, lang: lang });

  return (
    <section className="category-page">
      <CategoryLabel 
          bgColor={bgColor} 
          appConfig={appConfig} 
          categoryKey={subcategoryKey} 
      />
      
      <UploadMaterialCategory categoryKey={subcategoryKey} />
      
      {data.int && data.int.length > 0 ? (
        <CategoryMaterialCarousel materialType={data.int} text="interno" />
      ) : (
        <NoDocumentsSection />
      )}
      
      {data.ext && data.ext.length > 0 ? (
        <CategoryMaterialCarousel materialType={data.ext} text="esterno" />
      ) : (
        <NoDocumentsSection />
      )}
    </section>
  );
}