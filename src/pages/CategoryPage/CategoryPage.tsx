import { useEffect, useState } from "react";
import { CATEGORY_DATA_API } from "../../utils";
import './CategoryPage.css'

type LinkItem = {
  link: string;
  desc: string;
  sub: string | null;
};

type CategoryData = {
  status: number;
  subs: any[];
  ext: LinkItem[];
  int: LinkItem[];
};

type CategoryPageProps = {
  label: string;
  categoryKey: string;
};

export function CategoryPage({ label, categoryKey }: CategoryPageProps) {
  const [data, setData] = useState<CategoryData | null>(null);

  async function getData() {
    try {
      const response = await fetch(`${CATEGORY_DATA_API}id=${categoryKey}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2>{label}</h2>

      {data ? (
        <>
          <h3>Materiale Esterno</h3>
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
                {item.sub && <p>{item.sub}</p>}
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
