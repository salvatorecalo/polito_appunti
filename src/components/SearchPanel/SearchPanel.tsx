import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchPanel.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";

/*
* Box to search stuff like notes, slides, ecc.
* It uses edit.php api (more description avaible in model/api)
*/
export function SearchPanel(){
    const [searchText, setSearchText] = useState("");
    const navigator = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
    }
    function handleSearch() {
        navigator(`/search?id=${searchText}`)

    }
    return (
        <article className="search-panel">
            <h2>Cerca gratuitamente materiale <br /> per preparare i tuoi esami</h2>
            <div>  
                <input type="search" placeholder="Cerca appunti, slides, ecc.." name="search-query" value={searchText} onChange={handleChange} />
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch}/>
                {}
            </div>
        </article>
    );
}