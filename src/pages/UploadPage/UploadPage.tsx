import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPage.css'

/*
* This pages is located in /upload
* Here users can upload documents, slides, ecc
*/
export function UploadPage() {
    return (
        <section id="UploadPage">
            <form action="" method="post">
                <h2>Carica Materiale</h2>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <input type="text" placeholder="Nome del contentuto" />
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faLink} />
                        <input type="text" id="link" placeholder="Link al messaggio Telegram" />
                    </div>
                </div>
                <button>
                    Aggiungi
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </section>
    );
}