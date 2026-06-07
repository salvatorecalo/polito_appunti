import { useRouter, useSearchParams } from "next/navigation"
import { SearchInput } from '@/app/components/SearchPanel/components/search_input/search_input'
import { ChangeEvent, useEffect, useState } from 'react'
import { dbSearchByName, FormattedLink } from '@/app/server_actions/db_search/db_search_by_name'
import { MaterialCarousel } from '../../components/GeneralMaterial/components/material_carousel/material_carousel'


export function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const error = searchParams.get("error");
  const [localSearchText, setLocalSearchText] = useState<string>(query);
  const [internalResults, setInternalResults] = useState<FormattedLink[]>([])
  const [externalResults, setExternalResults] = useState<FormattedLink[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [networkError, setNetworkError] = useState<boolean>(false)
  const navigate = useRouter()

  // Sincronizza lo stato locale se la query nell'URL cambia (es. navigando avanti/indietro)
  useEffect(() => {
    setLocalSearchText(query);
  }, [query]);

  useEffect(() => {
    if (!query) return

    async function fetchSearchResults() {
      setIsLoading(true)
      setNetworkError(false)
      try {
        const result = await dbSearchByName({ name: query })
        if (result.status === 0 && result.int && result.ext && (result.int.length > 0 || result.ext.length > 0)) {
          setInternalResults(result.int);
          setExternalResults(result.ext);
        } else {
          setInternalResults([]);
          setExternalResults([]);
          navigate.replace(`/search?q=${encodeURIComponent(query)}&error=empty`);
        }
      } catch (e) {
        console.error("Error during data fetch:", e);
        setNetworkError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchResults()

  }, [query, navigate])

  // Piccolo accorgimento per evitare loop infiniti di redirect a tempo di build su Vercel:
  // Eseguiamo il redirect preventivo all'home page solo se siamo effettivamente sul browser (lato client)
  useEffect(() => {
    if (!query && !error) {
      navigate.push('/');
    }
  }, [query, error, navigate]);

  if (!query && !error) {
    return null;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchText(e.target.value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = localSearchText.trim();
    if (!trimmed) return;
    navigate.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  if (error === "empty" || (!query && error !== "network")) {
    return (
      <section className="SearchResults">
        <div className="search-panel">
          <SearchInput
            searchText={localSearchText}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
        </div>
        <div className="search-error-container">
          <h2>Nessun risultato trovato per: "{query}"</h2>
          <p>Prova a cercare qualcos' altro o verifica la presenza di errori di battitura.</p>
        </div>
      </section>
    )
  }

  if (error === 'network' || networkError) {
    return (
      <section className="SearchResults">
        <div className="search-panel">
          <SearchInput
            searchText={localSearchText}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
        </div>
        <p className="validation-error-text">❌ Errore di rete. Impossibile contattare il database.</p>
      </section>
    );
  }

  return (
    <section className="SearchResults">
      <div className="search-panel">
        <SearchInput
          searchText={localSearchText}
          isLoading={isLoading}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      </div>
      <h2>Risultati per: <span>"{query}"</span></h2>
      <MaterialCarousel materialType={internalResults} text="interno" />
      <MaterialCarousel materialType={externalResults} text="esterno" />
    </section>
  );
}
