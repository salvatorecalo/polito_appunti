import './CategoryPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import Link from 'next/link';
import { dbSearchByCategory } from '@/app/server_actions/db_search/db_search_by_category';
import { CategoryMaterialCarousel } from './components/category_material_carousel/category_material_carousel';

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

      <Link href={`/upload?opt=${categoryKey}`} className="categoryUploadButton">
        <FontAwesomeIcon icon={faUpload} />
        Carica materiale per questa categoria
      </Link>
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

