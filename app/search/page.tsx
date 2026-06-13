"use client"

import { Suspense } from 'react';
import { SearchContent } from './function/search_content';
import './SearchPage.css'
import { useTranslation } from '../(utils)/context/language_context/language_context';

export default function SearchPage() {
  const {t:translator} = useTranslation()

  return (
    <Suspense fallback={
      <section className="SearchResults">
        <p style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
          {translator.search.loadingText}
        </p>
      </section>
    }>
      <SearchContent />
    </Suspense>
  );
}