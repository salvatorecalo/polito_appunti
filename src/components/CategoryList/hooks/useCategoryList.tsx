import { useEffect, useState } from "react";
import { getCategories } from "../../../utils";

export function useCategoryList () {
    const [courses, setCourses] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        async function fetchData() {
            const data = await getCategories();
            setCourses(data);
        }
        fetchData();
    }, []);

    return {
        courses
    }
}