import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPage.css'
import { useState } from "react";

interface FormData {
    desc: string;
    url: string;
    categoria: string;
}

export function UploadPage() {
    const [formData, setFormData] = useState<FormData>({ desc: '', url: '', categoria: 'dummy' });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const validateForm = () => {
        const isNameValid = formData.desc.trim() !== '';
        const isLinkValid = formData.url.trim() !== '' && formData.url.trim().length < 50 && formData.url.trim().startsWith("https://t.me/appuntipolito/");
        setIsFormValid(isNameValid && isLinkValid);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const updatedFormData = { ...prevState, [name]: value };
            return updatedFormData;
        });
        validateForm();
    };

    const handleBlur = () => {
        validateForm(); 
    };

    // Gestore per l'invio del modulo
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            return;
        }
        console.log(JSON.stringify(formData));
        try {
            const response = await fetch("https://studyroompoli.altervista.org/notes/edit.php", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });
            if (response.ok) {
                console.log("Dati inviati con successo");
            } else {
                console.error("Errore nell'invio dei dati");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section id="UploadPage">
            <form onSubmit={handleSubmit}>
                <h2>Carica Materiale</h2>
                {!isFormValid ? <p style={{color: "red", fontWeight: "bold"}}>Compila tutti i campi per poter inviare il form</p> : <></>}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            name="url"
                            placeholder="Link al messaggio Telegram"
                            value={formData.url}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <p style={{color: "red"}}>Il Link telegram deve iniziare per forza con https://t.me/appuntipolito !</p>
                <button type="submit" disabled={!isFormValid}>
                    Aggiungi
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </section>
    );
}
