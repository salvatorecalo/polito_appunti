"use client"
import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../UploadPage.css';
import { useUploadPage } from "../hook/useUploadPage";

export default function UploadPage({courses}: {courses: Record<string, string>}) {
    const {
        actions, popupMessage, formData, isFormValid
    } = useUploadPage();

    return (
        <section id="UploadPage">
            <div className="form-card">
                <div className="form-header">
                    <h2>Carica Materiale</h2>
                    <p className="form-subtitle">Contribuisci alla community aggiungendo i tuoi appunti</p>
                </div>

                <form onSubmit={actions.handleSubmit}>
                    {popupMessage && (
                        <div className={`popup-banner ${popupMessage.includes('❌') ? 'error' : 'success'}`}>
                            {popupMessage}
                        </div>
                    )}

                    <div className="input-group">
                        <label htmlFor="name">Nome del contenuto</label>
                        <div className="input-field-wrapper">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Es. Esercizi di Analisi 1"
                                value={formData.name}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                            />
                            <FontAwesomeIcon icon={faBook} className="input-icon" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="url">Link al messaggio Telegram</label>
                        <div className="input-field-wrapper">
                            <input
                                type="text"
                                id="url"
                                name="link"
                                placeholder="https://t.me/appuntipolito/..."
                                value={formData.link}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                            />
                            <FontAwesomeIcon icon={faLink} className="input-icon" />
                        </div>
                        <span className="input-hint">
                            Deve iniziare tassativamente con: https://t.me/appuntipolito
                        </span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="category">Categoria Corso</label>
                        <div className="input-field-wrapper">
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                                className="custom-select"
                            >
                                <option value="">Seleziona una categoria</option>
                                <option value="gen">MATERIALE GENERICO</option>
                                {Object.entries(courses).map(([key, value]) => (
                                    <option key={key} value={key}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                            <FontAwesomeIcon icon={faBook} className="input-icon" />
                        </div>
                    </div>

                    {!isFormValid && formData.link && (
                        <p className="validation-error-text">
                            ⚠️ Compila tutti i campi correttamente per sbloccare l'invio.
                        </p>
                    )}

                    <button type="submit" className="submit-btn" disabled={!isFormValid}>
                        <span>Aggiungi materiale</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </form>
            </div>
        </section>
    );
}