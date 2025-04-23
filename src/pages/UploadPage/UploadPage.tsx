import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPage.css';
import { useUploadPage } from "./hook/useUploadPage";


export function UploadPage() {
    const {
        actions, popupMessage, formData, isFormValid, courses
      } = useUploadPage();
    return (
        <section id="UploadPage">
            <form onSubmit={actions.handleSubmit}>
                <h2>Carica Materiale</h2>
                {!isFormValid && (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        Compila tutti i campi per poter inviare il form
                    </p>
                )}

                {popupMessage && (
                    <div className="popup">
                        {popupMessage}
                    </div>
                )}

                <div>
                    <label htmlFor="desc">Nome:</label>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <input
                            type="text"
                            id="desc"
                            name="desc"
                            placeholder="Nome del contenuto"
                            value={formData.desc}
                            onChange={actions.handleChange}
                            onBlur={actions.handleBlur}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="url">Link al messaggio Telegram:</label>
                    <div>
                        <FontAwesomeIcon icon={faLink} />
                        <input
                            type="text"
                            id="url"
                            name="link"
                            placeholder="Link al messaggio Telegram"
                            value={formData.link}
                            onChange={actions.handleChange}
                            onBlur={actions.handleBlur}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="cat" className="form-label">Categoria:</label>
                    <div className="select-wrapper">
                        <FontAwesomeIcon icon={faBook} className="select-icon" />
                        <select
                            id="cat"
                            name="cat"
                            value={formData.cat}
                            onChange={actions.handleChange}
                            onBlur={actions.handleBlur}
                            className="custom-select"
                        >
                            <option value="">-- Seleziona una categoria --</option>
                            <option value="gen">MATERIALE GENERICO</option>
                            {Object.entries(courses).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

                <p style={{ color: "red" }}>
                    Il Link telegram deve iniziare per forza con https://t.me/appuntipolito !
                </p>
                <button type="submit" disabled={!isFormValid}>
                    Aggiungi
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </section>
    );
}
