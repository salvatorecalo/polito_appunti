import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <Link className="logo" to="/">
                <img src="banner.svg" alt="Regalo Appunti logo" fetchPriority="high" />
            </Link>
            <button
                className={`menu-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className="nav-links">
                <li><a href="https://t.me/appuntipolito/73" target='_blank'>FAQ</a></li>
                <li><a href="https://t.me/appuntipolito" target='_blank'>Collabora con noi</a></li>
                <li><a href="https://t.me/lithium333" target='_blank'>Segnala un problema</a></li>
            </ul>
        </nav>
    );
}
