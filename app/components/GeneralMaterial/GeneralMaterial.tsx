import { MaterialCarousel } from './components/material_carousel/material_carousel'
import './GeneralMaterial.css'
import { dbSearchByCategory } from "@/app/server_actions/db_search/db_search_by_category"

export async function GeneralMaterial({lang}: {lang: string}) {
  
  const { int, ext } = await dbSearchByCategory({ category: "1st", lang: lang })
  return (
    <section className="general-material">
      {int ? (
        <MaterialCarousel materialType={int} text="interno" />
      ) : (
       <></>
      )}
      {
        ext ? (
          <MaterialCarousel materialType={ext} text="esterno" />
        ) : (
          <></>
        )
      }
    </section>
  )
}