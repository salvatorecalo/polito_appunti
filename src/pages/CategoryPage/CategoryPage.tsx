import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORY_DATA_API } from "../../utils";
import './CategoryPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export type LinkItem = {
  link: string;
  desc: string;
  sub: string | null;
};

export type CategoryData = {
  status: number;
  ext: LinkItem[];
  int: LinkItem[];
  subs: Record<string, string>;
};

export type CategoryPageProps = {
  label: string;
  categoryKey: string;
};

export function CategoryPage({ label, categoryKey }: CategoryPageProps) {
  const [data, setData] = useState<CategoryData | null>(null);
  const location = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${CATEGORY_DATA_API}id=${categoryKey}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    }

    getData();
  }, [categoryKey]);

  useEffect(() => {
    if (!data) return;

    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.slice(1); // rimuove #
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [data, location]);
  return (
    <section className="category-page">
      <hgroup>
        <h2>{label}</h2>
      </hgroup>

      <button onClick={() => navigator(`/upload?opt=${categoryKey}`)} className="categoryUploadButton">
        <FontAwesomeIcon icon={faUpload} />
        Carica materiale per questa categoria
      </button>
      {data ? (
        <>
          <h3>Materiale Esterno (al telegram)</h3>
          {data.ext.length > 0 ? (
            data.ext.map((item, idx) => (
              <article key={`ext-${idx}`} {...(item.sub ? { id: item.sub } : {})}>
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
              <article key={`int-${idx}`} {...(item.sub ? { id: item.sub } : {})}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.desc}
                </a>
                {item.sub && <p>{data.subs[item.sub]}</p>}
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
