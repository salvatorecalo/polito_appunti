"use client"
import { useTranslation } from "@/app/(utils)/context/language_context/language_context";
import { SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";
import { insertLink } from "@/app/server_actions/insert_link/insert_link";
import { InsertPayload } from "@/app/server_actions/insert_link/model/insert_payload";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export function useUploadPage(){
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const searchParams = useSearchParams()
    const optParam = searchParams.get("opt")
    const {t: translator} = useTranslation()

    const [formData, setFormData] = useState<InsertPayload>({ 
        name: '', 
        link: '', 
        category: optParam || '',
        sub: null 
    });

    const validateForm = (currentData: InsertPayload) => {
        const isNameValid = currentData.name.trim() !== '';
        const isLinkValid = currentData.link.trim() !== '' && currentData.link.trim().startsWith("https://t.me/appuntipolito/");
        const isCatValid = currentData.category.trim() !== '';
        setIsFormValid(isNameValid && isLinkValid && isCatValid);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        setFormData(prevState => {
            // Se cambia la categoria principale, resettiamo la vecchia sottocategoria a null
            const updatedSub = name === "category" ? null : (name === "sub" ? (value === "" ? null : value) : prevState.sub);
            
            const updatedFormData = { 
                ...prevState, 
                [name]: value === "" && name === "sub" ? null : value,
                sub: updatedSub as SubCategoryKey
            };
            
            validateForm(updatedFormData); 
            return updatedFormData;
        });
    };
    
        const handleBlur = () => {
            validateForm(formData);
        };
    
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!isFormValid) {
                return;
            }
    
            try {
                const cleanPayload: InsertPayload = {
                name: formData.name.trim(),
                link: formData.link.trim(),
                category: formData.category,
                sub: formData.sub ? formData.sub : null
            };

            const response = await insertLink(cleanPayload);

            switch (response.status) {
                case 0:
                    setPopupMessage("✅ Caricamento riuscito!")
                    setFormData({ name: '', link: '', category: optParam || '', sub: null }) // Reset
                    setIsFormValid(false)
                    break;
                case -1:
                    setPopupMessage(translator.uploadPage.categoryNotValid)
                    break;
                case -2:
                    setPopupMessage(translator.uploadPage.subcategoryNotValid)
                    break;
                case -3:
                    setPopupMessage(translator.uploadPage.categoryDoesNotHaveSubcategory);
                    break;
                case -4:
                    setPopupMessage(translator.uploadPage.linkBadFormatted);
                    break;
                default:
                    setPopupMessage(translator.uploadPage.dbError);
            }
    
            } catch (error) {
                console.error(error);
                setPopupMessage(translator.general.networkError);
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
        }
}