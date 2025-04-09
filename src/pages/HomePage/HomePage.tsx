import { Navbar, SearchPanel, UploadPanel } from "../../components";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
    return (
        <main>
            <section style={{margin: "2em 1em"}}>
                <Navbar />
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>
            </section>
            <Footer />
        </main>
    );
}