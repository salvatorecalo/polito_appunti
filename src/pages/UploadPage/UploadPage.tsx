import { faBook, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPage.css'
import { useState } from "react";

interface FormData {
    name: string;
    link: string;
}

export function UploadPage() {
    const [formData, setFormData] = useState<FormData>({ name: '', link: '' });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const validateForm = () : void => {
        const isNameValid = formData.name.trim() !== "";
        const isLinkValid = formData.link.trim() !== "" && formData.link.trim().length < 50;
        setIsFormValid(isNameValid && isLinkValid);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const updatedFormData = { ...prevState, [name]: value };
            validateForm();
            return updatedFormData;
        });
    };

    return (
        <section id="UploadPage">
            <form action="" method="post">
                <h2>Carica Materiale</h2>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <div>
                        <FontAwesomeIcon icon={faBook} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome del contenuto"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="link">Link al messaggio Telegram:</label>
                    <div>
                        <FontAwesomeIcon icon={faLink} />
                        <input
                            type="text"
                            id="link"
                            name="link"
                            placeholder="Link al messaggio Telegram"
                            value={formData.link}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" disabled={!isFormValid}>
                    Aggiungi
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </section>
    );
}
