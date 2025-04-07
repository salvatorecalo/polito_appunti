import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <span className="logo">
                <img src="" alt="Regalo Appunti logo" />
            </span>
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
                <li><a href="https://t.me/appuntipolito/73">FAQ</a></li>
                <li><a href="https://t.me/lithium333">Collabora con noi</a></li>
                <li><a href="https://t.me/lithium333">Segnala un problema</a></li>
            </ul>
        </nav>
    );
}
