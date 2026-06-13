"use client"
import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../UploadPage.css';
import { useUploadPage } from "../hook/useUploadPage";
import { useTranslation } from "@/app/(utils)/context/language_context/language_context";

export default function UploadPage({courses}: {courses: Record<string, string>}) {
    const {
        actions, popupMessage, formData, isFormValid
    } = useUploadPage();

    const { t: translator } = useTranslation()

    return (
        <section id="UploadPage">
            <div className="form-card">
                <div className="form-header">
                    <h2>{translator.uploadPage.uploadMaterial}</h2>
                    <p className="form-subtitle">{translator.uploadPage.helpCommunity}</p>
                </div>

                <form onSubmit={actions.handleSubmit}>
                    {popupMessage && (
                        <div className={`popup-banner ${popupMessage.includes('❌') ? 'error' : 'success'}`}>
                            {popupMessage}
                        </div>
                    )}

                    <div className="input-group">
                        <label htmlFor="name">{translator.uploadPage.materialName}</label>
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
                        <label htmlFor="url">{translator.uploadPage.telegramLinkMessage}</label>
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
                           {translator.uploadPage.requirementsStartWith}
                        </span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="category">{translator.uploadPage.categoryCouse}</label>
                        <div className="input-field-wrapper">
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                                className="custom-select"
                            >
                                <option value="">{translator.uploadPage.selectACategory}</option>
                                <option value="gen">{translator.uploadPage.genericMaterial}</option>
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
                            {translator.uploadPage.completeAllFields}
                        </p>
                    )}

                    <button type="submit" className="submit-btn" disabled={!isFormValid}>
                        <span>{translator.uploadPage.addMaterial}</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </form>
            </div>
        </section>
    );
}