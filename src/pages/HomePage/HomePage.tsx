import { SearchPanel, UploadPanel } from "../../components";

export function HomePage() {
    return (
        <main>
            <section id="HomePage">
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>
            </section>
        </main>
    );
}