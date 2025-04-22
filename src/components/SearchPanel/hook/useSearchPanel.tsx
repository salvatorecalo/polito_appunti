import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { SEARCH_API } from "../../../utils/endpoints";

export function useSearchPanel() {
    const [searchText, setSearchText] = useState("");
        const navigator = useNavigate();
    
        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            setSearchText(e.target.value);
        }
    
        async function handleSearch() {
            const trimmedSearch = searchText.trim()
            try {
                const response = await fetch(`${SEARCH_API}id=${encodeURIComponent(trimmedSearch)}`);
                const result = await response.json();
    
                if (result.status === 0) {
                    // caso: ricerca con risultati
                    navigator(`/search?id=${encodeURIComponent(trimmedSearch)}`);
                } else {
                    // caso: nessun risultato trovato
                    navigator("/search?error=empty");
                }
            } catch (e) {
                console.error("Errore nella fetch:", e);
                // caso: errore di rete
                navigator("/search?error=network");
            }
        }
    
        function handleSubmit (e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault();
            handleSearch();
        }
    return {
        methods: {
            handleChange,
            handleSearch,
            handleSubmit
        },
        searchText,
    }
}