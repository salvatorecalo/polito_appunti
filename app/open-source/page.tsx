import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FRONTEND_GITHUB_REPO } from '../(utils)/utils';
import './OpenSource.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function OpenSourcePage() {
    return (
        <section className="opensource-section">
            <h1>📚 Polito Appunti è un progetto open source</h1>
            <p>
                Questa piattaforma nasce per condividere e organizzare appunti universitari in modo semplice e accessibile. <br />
                Chiunque può contribuire, migliorare il codice o segnalare problemi. <br />
                Se ti piace il progetto, dai un’occhiata al repository su GitHub!
            </p>
            <hgroup className='button-group'>
                <a className="github-button" href={FRONTEND_GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    Repo progetto
                </a>
            </hgroup>
        </section>
    );
}