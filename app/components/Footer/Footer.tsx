import { RUN_POLITO_WEBSITE } from '@/app/(utils)/utils';
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <h3>Polito Appunti è un progetto <a href="/open-source" target='_blank'>Open Source</a> e fa uso delle seguenti <a href='/credits'>licenze</a></h3>
            <h3>Powered by <a href={RUN_POLITO_WEBSITE} target='_blank'>Run Polito</a></h3>
        </footer>
    );
}