import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchPanel.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchPanel } from "./hook/useSearchPanel";

/*
* Box to search stuff like notes, slides, ecc.
* It uses edit.php api (more description avaible in model/api)
*/
export function SearchPanel() {
    const {methods, searchText} = useSearchPanel();
    return (
        <form onSubmit={methods.handleSubmit}>
            <article className="search-panel">
                <h2>Cerca gratuitamente materiale <br /> per preparare i tuoi esami</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Cerca appunti, slides, ecc.."
                        name="search-query"
                        value={searchText}
                        onChange={methods.handleChange}
                        required
                    />
                    <FontAwesomeIcon icon={faSearch} onClick={methods.handleSearch} />
                </div>
            </article>
        </form>
    );
}
