import { CategoryList, SearchPanel, UploadPanel, GeneralMaterial } from "../../components";
import './HomePage.css'

export function HomePage() {

    return (
        <main>
            <section id="HomePage">
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>
                <section className="action-container">
                    <GeneralMaterial />
                    <CategoryList />
                </section>
            </section>
        </main>
    );
}
