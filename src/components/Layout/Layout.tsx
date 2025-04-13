import { Outlet } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import './Layout.css';

export function Layout() {
    return (
        <main className="app">
            <section>
                <Navbar />
                <Outlet />
            </section>
            <Footer />
        </main>
    );
}
