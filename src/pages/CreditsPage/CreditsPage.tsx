import './Creditspage.css'

export function CreditsPage() {
    return (
        <section className="creditsPage">
            Questo sito web fa uso:
            <ul>
                <li>
                   <p>Delle icone di <a href="https://fontawesome.com">Font Awesome</a></p>
                </li>
                <li>
                   <p>Delle illustrazioni di <a href="https://storyset.com">Story Set</a></p>
                </li>
            </ul>
        </section>
    );
}