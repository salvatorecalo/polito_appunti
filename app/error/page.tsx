"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import './ErrorPage.css';

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const queryId = searchParams.get('id');

    return (
        <section className='ErrorPage'>
            <Image 
                src="404_image.svg" 
                width="600"
                alt="Errore 404: ricerca non trovata" 
                fetchPriority='high'
            />
            {queryId == "empty" ? <p>Attento hai inserito una stringa vuota</p>: <p>Non abbiamo trovato alcun risultato per la ricerca: <strong>{queryId}</strong></p> }
            <Link href="/">Ritorna alla Home Page</Link>
        </section>
    );
}