"use client"
import { faBook, faFlag, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../UploadPage.css';
import { useUploadPage } from "../hook/useUploadPage";
import { useTranslation } from "@/app/(utils)/context/language_context/language_context";
import { SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";
import { useSearchParams } from "next/navigation";

interface UploadPageProps {
    courses_it: Record<string, string>;
    courses_en: Record<string, string>;
    subcats_it: Record<SubCategoryKey, Record<string, string>>;
    subcats_en: Record<SubCategoryKey, Record<string, string>>;
}

export default function UploadPage({courses_it, courses_en, subcats_it, subcats_en}: UploadPageProps) {
    const { actions, popupMessage, formData, isFormValid } = useUploadPage();
    const { t: translator, lang } = useTranslation();
    const allSubcats = lang === "it" ? subcats_it : subcats_en;
    
    const currentCategorySubcats = formData.category 
        ? (allSubcats[formData.category as SubCategoryKey] || {}) 
        : {};

    const hasSubcats = Object.keys(currentCategorySubcats).length > 0;

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
                                {Object.entries(lang === "it" ? courses_it : courses_en).map(([key, value]) => (
                                    <option key={key} value={key}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                            <FontAwesomeIcon icon={faBook} className="input-icon" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="subcategory">{translator.uploadPage.subcategoryCouse}</label>
                        <div className="input-field-wrapper">
                            <select
                                id="sub"
                                name="sub"
                                value={formData.sub as string}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                                className="custom-select"
                                disabled={!hasSubcats} 
                            >
                                <option value="">
                                    {!formData.category 
                                        ? "Prima seleziona una categoria..." 
                                        : translator.uploadPage.selectASubCategory}
                                </option>
                                
                                {Object.entries(currentCategorySubcats).map(([subKey, subLabel]) => (
                                    <option key={subKey} value={subKey}>
                                        {subLabel as string}
                                    </option>
                                ))}
                            </select>
                            <FontAwesomeIcon icon={faBook} className="input-icon" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="lang">{translator.uploadPage.lang}</label>
                        <div className="input-field-wrapper">
                            <select
                                id="lang"
                                name="lang"
                                value={formData.lang}
                                onChange={actions.handleChange}
                                onBlur={actions.handleBlur}
                                className="custom-select"
                            >
                                <option value="it">IT</option>
                                <option value="en">EN</option>
                            </select>
                            <FontAwesomeIcon icon={faFlag} className="input-icon" />
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