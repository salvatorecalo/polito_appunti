import { Outlet } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";


export function Layout() {
    return (
        <>
            <section style={{margin: "2em 1em"}}>
                <Navbar />
                <Outlet />
            </section>
            <Footer />
        </>
    );
}
