// pages/HomePage.tsx
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../utils';
import { CategoryList, SearchPanel, UploadPanel, GeneralMaterial } from '../../components';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import './HomePage.css';

export function HomePage() {
  const [params] = useSearchParams();
  const id = params.get('id');
  const [label, setLabel] = useState<string | null>(null);

  async function fetchCategory() {
    if (id) {
      const categories = await getCategories();
      setLabel(categories[id] || null);
    } else {
      setLabel(null);
    }
  }
  
  useEffect(() => {
    fetchCategory();
  }, [id]);

  if (label) {
    return <CategoryPage categoryKey={id!} label={label} />;
  }

  return (
    <main>
      <section id="HomePage">
        <section className="action-container">
          <SearchPanel />
          <UploadPanel />
        </section>
        <section className="action-container">
          <GeneralMaterial />
          <CategoryList />
        </section>
      </section>
    </main>
  );
}
