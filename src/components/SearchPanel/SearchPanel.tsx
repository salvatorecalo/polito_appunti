import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchPanel.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { SEARCH_API } from "../../utils/endpoints";

/*
* Box to search stuff like notes, slides, ecc.
* It uses edit.php api (more description avaible in model/api)
*/
export function SearchPanel() {
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
    
    

    return (
        <article className="search-panel">
            <h2>Cerca gratuitamente materiale <br /> per preparare i tuoi esami</h2>
            <div>
                <input
                    type="search"
                    placeholder="Cerca appunti, slides, ecc.."
                    name="search-query"
                    value={searchText}
                    onChange={handleChange}
                    required
                />
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
            </div>
        </article>
    );
}
