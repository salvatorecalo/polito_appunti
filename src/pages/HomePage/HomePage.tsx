import { CategoryList, SearchPanel, UploadPanel } from "../../components";
import './HomePage.css'

export function HomePage() {

    return (
        <main>
            <section id="HomePage">
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>

                <CategoryList />
            </section>
        </main>
    );
}
