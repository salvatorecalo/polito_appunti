import { useMemo } from "react";
import { Link } from "react-router";
import { courses } from "../../utils";
import './CategoryList.css'

export function CategoryList() {
    const coloredCourses = useMemo(() => {
        return Object.entries(courses).map(([key, label]) => {
            return {
                key,
                label,
            };
        });
    }, []);
    return (
        <section className="categories-list">
            {
                coloredCourses.map(({ key, label }) => (
                    key != "dummy" ? <Link
                        key={key}
                        to={`/${key}`}
                        className="category-link"
                    >
                        {label}
                    </Link> : <></>
                ))
            }
        </section>
    );
}