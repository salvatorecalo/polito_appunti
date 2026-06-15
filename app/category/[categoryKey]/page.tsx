import './CategoryPage.css';
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import { dbSearchByCategory } from '@/app/server_actions/db_search/db_search_by_category';
import { CategoryMaterialCarousel } from './components/category_material_carousel/category_material_carousel';
import { UploadMaterialCategory } from './components/upload_material_category/upload_material_category';
import { CategoryLabel } from './components/category_label/category_label';

interface PageProps {
  params: Promise<{ categoryKey: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { categoryKey } = await params
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as string) || "it"
  const appConfig = await getAppConfig()
  const bgColor = appConfig.backgrounds[categoryKey] || "#ED6D33"
  const data = await dbSearchByCategory({ category: categoryKey, lang: lang })
  
  return (
    <section className="category-page">
      <CategoryLabel bgColor={bgColor} appConfig={appConfig} categoryKey={categoryKey} />
      <UploadMaterialCategory categoryKey={categoryKey} />
      {data.int && data.int.length > 0 ? (
        <CategoryMaterialCarousel materialType={data.int} text="interno" />
      ) : (
        <></>
      )}
      {data.ext && data.ext.length > 0 ? (
        <CategoryMaterialCarousel materialType={data.ext} text="esterno" />
      ) : (
        <></>
      )
      }
    </section>
  );
}

