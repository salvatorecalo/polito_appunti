import './CategoryPage.css';
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import { CategoryLabel } from './components/category_label/category_label';
import { Suspense } from 'react';
import { SubcategorySection } from './components/subcategory_section/subcategory_section';

interface PageProps {
  params: Promise<{ categoryKey: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { categoryKey } = await params
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as string) || "it"
  const appConfig = await getAppConfig()
  const bgColor = appConfig.backgrounds[categoryKey as keyof typeof appConfig.backgrounds] || "#ED6D33"
  const allSubcats = lang === "it" ? appConfig.subcats_it : appConfig.subcats_en;
  const currentCategorySubcats = allSubcats[categoryKey as keyof typeof allSubcats] || {};

  return (
    <section className="category-page">
      <CategoryLabel bgColor={bgColor} appConfig={appConfig} categoryKey={categoryKey} />

      {Object.entries(currentCategorySubcats).map(([subcatKey, subcatLabel]) => (
        <Suspense key={subcatKey} fallback={<h2>{subcatLabel as string}</h2>}>
          <SubcategorySection
            subcatKey={subcatKey}
            subcatLabel={subcatLabel as string}
            lang={lang}
          />
        </Suspense>
      ))}
    </section>
  );
}

