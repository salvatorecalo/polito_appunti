import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEARCH_API } from "../../utils/endpoints";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { SearchPanel } from "../../components";
import './Searchpage.css'
import { getCategories } from "../../utils";

interface ApiResponse {
  status: number;
  cat: string[][];  // An array of arrays containing strings (categories)
  ext: string[][];  // An array of arrays containing strings (external materials)
  int: string[][];  // An array of arrays containing strings (internal materials)
}

interface Result {
  category: string[];
  externalMaterials: string[];  // External materials
  internalMaterials: string[];  // Internal materials
}

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  const error = searchParams.get("error");
  const navigate = useNavigate();
  const [results, setResults] = useState<Result[]>([]);  // Results should be of type Result[]
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Errore nel fetch delle categorie:", error);
      }
    }

    loadCategories();
  }, []);

  useEffect(() => {
    if (!query && !error) {
      navigate('/');
      return;
    }

    async function fetchData() {
      if (error === 'empty') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${SEARCH_API}id=${encodeURIComponent(query || "")}`);
        const data: ApiResponse = await response.json();
        if (data.status === 0) {
          const resultsArr: Result[] = [];

          if (data.cat.length > 0) {
            data.cat.forEach(catItem => {
              resultsArr.push({
                category: catItem,
                externalMaterials: [],
                internalMaterials: []
              });
            });
          }

          if (data.ext.length > 0) {
            data.ext.forEach(extItem => {
              resultsArr.push({
                category: [],
                externalMaterials: extItem,
                internalMaterials: []
              });
            });
          }

          if (data.int.length > 0) {
            data.int.forEach(intItem => {
              resultsArr.push({
                category: [],
                externalMaterials: [],
                internalMaterials: intItem
              });
            });
          }

          setResults(resultsArr);
        }
      } catch (error) {
        console.error("Errore nella fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, error, navigate]);

  if (loading) return <p>Caricamento...</p>;
  if (error === 'empty') {
    return <ErrorPage />;
  }
  return (
    <section className="SearchResults">
      <SearchPanel />
      <h2>Risultati per: {query}</h2>
      <main>
        <h3>Categorie:</h3>
        {results.some(r => r.category.length > 0) ? (
          <ul>
            {results.map((result, i) =>
              result.category.length > 0 ? (
                <li key={`cat-${i}`}>
                  <article className="search-item">
                    <a href={`/?id=${result.category[1]}${result.category[3] ? `#${result.category[3]}` : ''}`} target="_blank" rel="noopener noreferrer">
                      {result.category[2] ? result.category[0] + ": " + result.category[2] : result.category[0]}
                    </a>
                  </article>
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p>Nessuna categoria trovata</p>
        )}

        <h3>Materiale Interno:</h3>
        {results.some(r => r.internalMaterials.length > 0) ? (
          <ul>
            {results.map((result, i) =>
              result.internalMaterials.length > 0 ? (
                <li key={`int-${i}`}>
                  <article className="search-item">
                    <a href={result.internalMaterials[2]} target="_blank" rel="noopener noreferrer">
                      {result.internalMaterials[3]}
                    </a>
                    {categories[result.internalMaterials[0]] && (
                      <p>{categories[result.internalMaterials[0]]}</p>
                    )}
                  </article>
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p>Nessun materiale trovato</p>
        )}

        <h3>Materiale Esterno:</h3>
        {results.some(r => r.externalMaterials.length > 0) ? (
          <ul>
            {results.map((result, i) =>
              result.externalMaterials.length > 0 ? (
                <li key={`ext-${i}`}>
                  <article className="search-item">
                    <a href={result.externalMaterials[2]} target="_blank" rel="noopener noreferrer">
                      {result.externalMaterials[3]}
                    </a>
                    {categories[result.internalMaterials[0]] && (
                      <p>{categories[result.internalMaterials[0]]}</p>
                    )}
                  </article>
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p>Materiale non trovato</p>
        )}

      </main>
    </section>
  );
}
