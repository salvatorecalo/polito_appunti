import { Navbar, SearchPanel, UploadPanel } from "../../components";

export function HomePage() {
    return (
        <main style={{margin: "2em 1em"}}>
            <Navbar />
            <section className="action-container">
                <SearchPanel />
                <UploadPanel />
            </section>
        </main>
    );
}