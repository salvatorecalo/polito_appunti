import { Navbar, SearchPanel, UploadPanel } from "./components/index.ts";
import './App.css'

/*
* This is where all the website contents go
*/
export function App() {
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