import { useEffect, useState } from "react";
import { CATEGORY_DATA_API } from "../../../utils";
import { CategoryData } from "../../../pages/CategoryPage/CategoryPage";

export function useGeneralMaterial() {
    const [data, setData] = useState<CategoryData | null>(null);
    
      async function getData() {
        try {
          const response = await fetch(`${CATEGORY_DATA_API}`);
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error("Errore nel fetch:", error);
        }
      }
    
      useEffect(() => {
        getData();
      }, []);

    return {
        data
    };
}