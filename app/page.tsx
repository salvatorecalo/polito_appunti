import {CategoryList } from "./components/CategoryList/CategoryList";
import { GeneralMaterial } from "./components/GeneralMaterial/GeneralMaterial";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";

export default function Home() {
  return (
     <main>
      <section id="HomePage">
        <section className="action-container">
          <SearchPanel />
          <CategoryList />
        </section>
        <section className="action-container">
          <GeneralMaterial />       
        </section>
      </section>
    </main>
  );
}
