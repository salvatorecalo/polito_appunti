import './CategoryPage.css';
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import { CategoryLabel } from './components/category_label/category_label';
import { CategoryLink } from '@/app/components/CategoryLink/categoryLink';

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
      {
        Object.entries(currentCategorySubcats).map(([subcatKey, subcatLabel]) => (
          <CategoryLink key={subcatKey} subcatKey={subcatKey} lang={lang} backgrounds={appConfig.backgrounds} bgColor={bgColor} subcatLabel={subcatLabel} parentKey={categoryKey} />
        ))
      }
    </section>
  );
}

