"use client"
import { useTranslation } from '../(utils)/context/language_context/language_context';
import './CreditsPage.css'

export default function CreditsPage() {
    const {t:translator} = useTranslation()

    return (
        <section className="creditsPage">
            {translator.credits.websiteUse}
            <ul>
                <li>
                   <p>{translator.credits.iconsBy(<a href="https://fontawesome.com">Font Awesome</a>)}</p>
                </li>
                <li>
                   <p>{translator.credits.illustrationBy(<a href="https://fontawesome.com">Font Awesome</a>)}</p>
                </li>
            </ul>
        </section>
    )
}