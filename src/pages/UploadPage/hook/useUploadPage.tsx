import { useEffect, useState } from "react";
import { getCategories, INSERT_API } from "../../../utils/";
interface FormData {
    desc: string;
    link: string;
    cat: string;
    sub: string | null;
}
export function useUploadPage(){
    const [formData, setFormData] = useState<FormData>({ desc: '', link: '', cat: '', sub: null });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [courses, setCourses] = useState<{ [key: string]: string }>({});
    
    useEffect(() => {
            async function fetchData() {
                const data = await getCategories();
                setCourses(data);
            }
            fetchData();
    }, []);
    const validateForm = () => {
        const isNameValid = formData.desc.trim() !== '';
        const isLinkValid = formData.link.trim() !== '' && formData.link.trim().startsWith("https://t.me/appuntipolito/");
        const isCatValid = formData.cat.trim() !== '';
        setIsFormValid(isNameValid && isLinkValid && isCatValid);
    };
    
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!isFormValid) {
                return;
            }
    
            try {
                const response = await fetch(INSERT_API, {
                    method: "POST",
                    body: new URLSearchParams({
                        data: JSON.stringify(formData),
                    }),
                });
    
                const text = await response.text();
                const json = JSON.parse(text);
    
                switch (json.status) {
                    case 0:
                        setPopupMessage("✅ Caricamento riuscito!");
                        break;
                    case -1:
                        setPopupMessage("❌ Categoria non valida.");
                        break;
                    case -2:
                        setPopupMessage("❌ Sottocategoria non valida.");
                        break;
                    case -3:
                        setPopupMessage("❌ Link non consentito.");
                        break;
                    default:
                        setPopupMessage("❌ Errore sconosciuto.");
                }
    
            } catch (error) {
                console.error(error);
                setPopupMessage("❌ Errore di rete o del server.");
            }
        };

        return {
            actions: {
                handleBlur,
                handleChange,
                handleSubmit,
                validateForm,
            },
            formData,
            isFormValid,
            popupMessage,
            courses
        }
}