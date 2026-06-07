import Link from 'next/link';
import './CategoryList.css'
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';

export async function CategoryList() {
    const { categories, backgrounds } = await getAppConfig()

    return (
        <section className="categories-list">
            {
                Object.entries(categories).map(([key, label]) =>
                    key !== "dummy" ? (
                        <Link
                            key={key}
                            href={`/category/${key}`}
                            className="category-link"
                            style={{
                                '--category-bg': backgrounds[key],
                                '--category-hover-bg': backgrounds[`${key}-dark`],
                            } as React.CSSProperties}
                        >
                            {label}
                        </Link>
                    ) : null
                )
            }
        </section>
    );
}
