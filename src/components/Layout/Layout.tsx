import { Outlet } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";


export default function Layout() {
    return (
        <>
            <Navbar />
            <main style={{ margin: "2em 1em" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
