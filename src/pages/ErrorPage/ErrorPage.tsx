import './ErrorPage.css';

export function ErrorPage() {
    const searchParams = new URLSearchParams(location.search);
    const queryId = searchParams.get('id');

    return (
        <section className='ErrorPage'>
            <img 
                src="404_image.svg" 
                width="600vw"
                alt="Errore 404: ricerca non trovata" 
                fetchPriority='high'
            />
            <p>Non abbiamo trovato alcun risultato per la ricerca: <strong>{queryId}</strong></p>
            <a href="/">Ritorna alla Home Page</a>
        </section>
    );
}
