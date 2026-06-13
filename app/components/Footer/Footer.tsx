"use client"
import { RUN_POLITO_WEBSITE } from '@/app/(utils)/utils';
import './Footer.css'
import { useTranslation } from '@/app/(utils)/context/language_context/language_context';
import Link from 'next/link';

export function Footer() {
    const {t: translator} = useTranslation()

    return (
        <footer>
            <h3>{translator.footer.footerText(
                    <Link href="/open-source" key="footerOpenSource" target='_blank'>Open Source</Link>, 
                    <Link href='/credits'>{translator.footer.license}</Link>,
                )}
            </h3>
            <h3>Powered by <a href={RUN_POLITO_WEBSITE} target='_blank'>Run Polito</a></h3>
        </footer>
    );
}