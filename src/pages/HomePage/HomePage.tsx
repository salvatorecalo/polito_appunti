import { SearchPanel, UploadPanel } from "../../components";
import { courses, getRandomColor, lightenOrFade } from "../../utils";
import { Link } from "react-router";
import './HomePage.css'
import { useMemo } from "react";

export function HomePage() {

    const coloredCourses = useMemo(() => {
        return Object.entries(courses).map(([key, label]) => {
            const bgColor = getRandomColor();
            return {
                key,
                label,
                bgColor,
                hoverColor: lightenOrFade(bgColor, 0.3),
            };
        });
    }, []);
    return (
        <main>
            <section id="HomePage">
                <section className="action-container">
                    <SearchPanel />
                    <UploadPanel />
                </section>

                <section className="categories-list">
                {
                        coloredCourses.map(({ key, label, bgColor, hoverColor }) => (
                            <Link
                                key={key}
                                to={`/${key}`}
                                className="category-link"
                                style={{
                                    backgroundColor: bgColor,
                                    '--hover-color': hoverColor,
                                } as React.CSSProperties}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </section>
            </section>
        </main>
    );
}
