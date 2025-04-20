import { useGeneralMaterial } from "./hooks/useGeneralMaterial"
import './GeneralMaterial.css'

export function GeneralMaterial() {
    const {
        data
    } = useGeneralMaterial()
    return (
      <section className="general-material">
      <h2>Sfogia tra i vari documenti</h2>

      {data ? (
        <>
          <h3>Materiale Esterno</h3>
          {data.ext.length > 0 ? (
            data.ext.map((item, idx) => (
              <article key={`ext-${idx}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.desc}
                </a>
                {item.sub && <p>{item.sub}</p>}
              </article>
            ))
          ) : (
            <p>Nessun materiale esterno</p>
          )}

          <h3>Materiale Interno</h3>
          {data.int.length > 0 ? (
            data.int.map((item, idx) => (
              <article key={`int-${idx}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.desc}
                </a>
                {item.sub && <p>{item.sub}</p>}
              </article>
            ))
          ) : (
            <p>Nessun materiale interno</p>
          )}
        </>
      ) : (
        <p>Caricamento dati...</p>
      )}
    </section>
    )
}