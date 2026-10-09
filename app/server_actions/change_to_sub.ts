import LinkModel from "@/app/(utils)/db/schema/link_schema";
import connectToDb from "./db_connect/db_connect";
import { getOldData } from "./get_data";

export async function restoreAndChangeSub() {
    const data = getOldData();

    try {
        await connectToDb();

        for (const item of data.courses) {
            const { cat, sub, elms } = item;

            // Il nuovo valore che vuoi impostare, ad esempio "1st_alg"
            const newSubValue = `${cat}_${sub}`;

            for (const [title, url] of Object.entries(elms)) {
                // Cerchiamo il documento tramite il suo URL per essere sicuri di prendere quello giusto,
                // a prescindere da cosa c'è scritto ora nel suo campo "sub" nel database.
                await LinkModel.updateOne(
                    { link: url }, // NOTA: Sostituisci "url" con il nome esatto del campo URL nel tuo schema Mongoose (potrebbe essere "link" o "href")
                    {
                        $set: {
                            cat: cat,        // Ripristiniamo anche la cat per sicurezza
                            sub: newSubValue // Impostiamo il formato "cat_sub"
                        },
                        $setOnInsert: {
                            title: title
                        }
                    },
                    { upsert: true }
                );
            }
        }
        console.log("Ripristino e aggiornamento completati con successo!");
    } catch (e) {
        console.error("Errore durante il ripristino:", e);
    }
}