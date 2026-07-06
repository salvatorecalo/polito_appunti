import {CategoryList } from "./components/CategoryList/CategoryList";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Home({ searchParams }: PageProps) {
  const lang = ((await searchParams).lang as string) || 'it'

  return (
     <main>
        <section id="HomePage">
          <section className="action-container">
            <SearchPanel />
            <CategoryList />
          </section>
        </section>
    </main>
  );
}
