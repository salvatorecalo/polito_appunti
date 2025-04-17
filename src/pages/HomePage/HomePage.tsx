import { useEffect, useState } from "react";
import { SearchPanel, UploadPanel } from "../../components";

export function HomePage() {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch('https://studyroompoli.altervista.org/notes/data/cfg.json');
            console.log("Response:", response);
            const jsonData = await response.json();
            setData(jsonData || []); 
        } catch (error) {
            console.error("Errore nel fetch dei dati:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <section id="HomePage">
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>

                <section className="categories-list">
                    {<p>Data: {data}</p>}
                </section>
            </section>
        </main>
    );
}
