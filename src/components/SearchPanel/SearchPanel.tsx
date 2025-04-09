import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchPanel.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/*
* Box to search stuff like notes, slides, ecc.
* It uses edit.php api (more description avaible in model/api)
*/
export function SearchPanel(){
    return (
        <article className="search-panel">
            <h2>Cerca gratuitamente materiale <br /> per preparare i tuoi esami</h2>
            <div>
                <input type="search" placeholder="Cerca appunti, slides, ecc.." />
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </article>
    );
}