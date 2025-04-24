import { FRONTEND_GITHUB_REPO, RUN_POLITO_WEBSITE } from '../../utils';
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <h3>Polito Appunti è un progetto <a href={FRONTEND_GITHUB_REPO} target='_blank'>Open Source</a> e fa uso delle seguenti <a href='/credits'>licenze</a></h3>
            <h3>Powered by <a href={RUN_POLITO_WEBSITE} target='_blank'>Run Polito</a></h3>
        </footer>
    );
}