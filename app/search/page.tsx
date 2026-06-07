"use client"

import { Suspense } from 'react';
import { SearchContent } from './function/search_content';
import './SearchPage.css'

export default function SearchPage() {
  return (
    <Suspense fallback={
      <section className="SearchResults">
        <p style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
          Caricamento della ricerca in corso...
        </p>
      </section>
    }>
      <SearchContent />
    </Suspense>
  );
}