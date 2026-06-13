import './CategoryPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import Link from 'next/link';
import { dbSearchByCategory } from '@/app/server_actions/db_search/db_search_by_category';
import { CategoryMaterialCarousel } from './components/category_material_carousel/category_material_carousel';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { UploadMaterialCategory } from './components/upload_material_category/upload_material_category';

interface PageProps {
  params: Promise<{ categoryKey: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { categoryKey } = await params
  const appConfig = await getAppConfig()
  const label = appConfig.categories[categoryKey] || "Categoria Sconosciuta";
  const bgColor = appConfig.backgrounds[categoryKey] || "#ED6D33";
  const data = await dbSearchByCategory({ category: categoryKey });
  
  return (
    <section className="category-page">
      <hgroup style={{background: bgColor}}>
        <h2>{label}</h2>
      </hgroup>

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

