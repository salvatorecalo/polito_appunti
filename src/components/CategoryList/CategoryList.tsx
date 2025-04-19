import { useEffect, useState } from "react";
import { Link } from "react-router";
import './CategoryList.css'
import { getCategories } from "../../utils";

export function CategoryList() {
    const [courses, setCourses] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        async function fetchData() {
            const data = await getCategories();
            setCourses(data);
        }
        fetchData();
    }, []);

    return (
        <section className="categories-list">
            {
                Object.entries(courses).map(([key, label]) =>
                    key !== "dummy" ? (
                        <Link
                            key={key}
                            to={`/${key}`}
                            className="category-link"
                        >
                            {label}
                        </Link>
                    ) : null
                )
            }
        </section>
    );
}
