import { Link } from "react-router";
import './CategoryList.css'
import { useCategoryList } from "./hooks/useCategoryList";

export function CategoryList() {
    const { courses } = useCategoryList()

    return (
        <section className="categories-list">
            <h2 className="category-section-title">Naviga tra le varie sezioni</h2>
            {
                Object.entries(courses).map(([key, label]) =>
                    key !== "dummy" ? (
                        <Link
                            key={key}
                            to={`/?id=${key}`}
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
