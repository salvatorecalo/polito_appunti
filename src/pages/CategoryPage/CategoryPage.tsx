import { useEffect, useState } from "react";
import { CATEGORY_DATA_API } from "../../utils";
import './CategoryPage.css'

export type LinkItem = {
  link: string;
  desc: string;
  sub: string | null;
};

export type CategoryData = {
  status: number;
  ext: LinkItem[];
  int: LinkItem[];
};

export type CategoryPageProps = {
  label: string;
  categoryKey: string;
};

export function CategoryPage({ label, categoryKey }: CategoryPageProps) {
  const [data, setData] = useState<CategoryData | null>(null);
  const [subs, setSubs] = useState<Record<string, string>>({});
  async function getData() {
    try {
      const response = await fetch(`${CATEGORY_DATA_API}id=${categoryKey}`);
      const json = await response.json();
      setData(json);
      setSubs(json.subs)
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <section className="category-page">
    <hgroup>
        <h2>{label}</h2>
    </hgroup>

      {data ? (
        <>
          <h3>Materiale Esterno (al telegram)</h3>
          {data.ext.length > 0 ? (
            data.ext.map((item, idx) => (
              <article key={`ext-${idx}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.desc}
                </a>
                {item.sub && <p>{item.sub}</p>}
              </article>
            ))
          ) : (
            <p>Nessun materiale esterno</p>
          )}

          <h3>Materiale Interno</h3>
          {data.int.length > 0 ? (
            data.int.map((item, idx) => (
              <article key={`int-${idx}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.desc}
                </a>
                {item.sub && <p>{subs[item.sub]}</p>}
              </article>
            ))
          ) : (
            <p>Nessun materiale interno</p>
          )}
        </>
      ) : (
        <p>Caricamento dati...</p>
      )}
    </section>
  );
}
