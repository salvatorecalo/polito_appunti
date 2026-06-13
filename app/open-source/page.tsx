"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FRONTEND_GITHUB_REPO } from '../(utils)/utils';
import './OpenSource.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../(utils)/context/language_context/language_context';

export default function OpenSourcePage() {
    const {t: translator} = useTranslation()

    return (
        <section className="opensource-section">
            <h1>{translator.openSourceProject.mainHeading}</h1>
            <p>
                {translator.openSourceProject.description}
            </p>
            <hgroup className='button-group'>
                <a className="github-button" href={FRONTEND_GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    {translator.openSourceProject.repo}
                </a>
            </hgroup>
        </section>
    );
}