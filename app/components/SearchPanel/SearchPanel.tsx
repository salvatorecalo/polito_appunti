"use client"

import './SearchPanel.css'
import { useSearchPanel } from "./hook/useSearchPanel";
import { SearchInput } from "./components/search_input/search_input";
import { useTranslation } from '@/app/(utils)/context/language_context/language_context';

export function SearchPanel() {
    const { methods, searchText, isLoading } = useSearchPanel();
    const {t:translator} = useTranslation()

    return (
        <div className="search-panel" style={{alignItems: "center"}}>
            <h2>{translator.homepage.mainHeading}</h2>
            <SearchInput searchText={searchText} isLoading={isLoading} onInputChange={methods.handleChange} onSubmit={methods.handleSubmit} />
        </div>
    );
}