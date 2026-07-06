import { useRouter, useSearchParams } from "next/navigation"
import { SearchInput } from '@/app/components/SearchPanel/components/search_input/search_input'
import { ChangeEvent, useEffect, useState } from 'react'
import { dbSearchByName, FormattedLink } from '@/app/server_actions/db_search/db_search_by_name'
import Image from "next/image"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context"
import { MaterialCarousel } from "@/app/category/[categoryKey]/components/material_carousel"

export function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const lang = searchParams.get("lang") || "it"
  const [internalResults, setInternalResults] = useState<FormattedLink[]>([])
  const [externalResults, setExternalResults] = useState<FormattedLink[]>([])
  const error = searchParams.get("error");
  const [localSearchText, setLocalSearchText] = useState<string>(query);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [networkError, setNetworkError] = useState<boolean>(false)
  const navigate = useRouter()
  const {t:translator} = useTranslation()

  useEffect(() => {
    setLocalSearchText(query);
  }, [query]);

  useEffect(() => {
    if (!query) return

    async function fetchSearchResults() {
      setIsLoading(true)
      setNetworkError(false)
      try {
        const result = await dbSearchByName({ name: query, lang: lang })
        if (result.status === 0 && result.int && result.ext && (result.int.length > 0 || result.ext.length > 0)) {
          setInternalResults(result.int);
          setExternalResults(result.ext);
        } else {
          setInternalResults([]);
          setExternalResults([]);
          navigate.replace(`/search?q=${encodeURIComponent(query)}&error=empty&lang=${lang}`);
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
    navigate.push(`/search?q=${encodeURIComponent(trimmed)}&lang=${lang}`);
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
          <h2>{translator.search.noResults(query)}</h2>
          <p>{translator.search.searchOther}</p>
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
        <p className="validation-error-text">{translator.general.networkError}</p>
      </section>
    );
  }
  
  const isRunPolitoEasterEgg = externalResults[0]?.name .toLowerCase() === "run polito";

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
      
      <h2>{translator.search.results(query)}</h2>

      {isLoading ? (
        <div className="loading-container" style={{ textAlign: 'center', padding: '3rem' }}>
          <p>{translator.search.loadingText}.</p> 
        </div>
      ) : (
        isRunPolitoEasterEgg ? (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <Image 
              src="/run.jpeg"
              width={500} 
              height={500} 
              alt="Foto di run che vince le elezioni" 
              priority
            />
          </div>
        ) : (
          <>
            <MaterialCarousel materialType={internalResults} text="interno" />
            <MaterialCarousel materialType={externalResults} text="esterno" />
          </>
        )
      )}
    </section>
  );
}
