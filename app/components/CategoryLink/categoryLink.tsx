import Link from "next/link";
import './categorylink.css'

interface CategoryLinkProps {
    parentKey?: string;
    subcatKey: string;
    lang: string;
    backgrounds: Record<string,string>;
    bgColor: string;
    subcatLabel: string;
}

export function CategoryLink({parentKey, subcatKey, lang, backgrounds, bgColor, subcatLabel}: CategoryLinkProps) {
    const targetUrl = parentKey 
        ? `/category/${parentKey}/${subcatKey}?lang=${lang}` 
        : `/category/${subcatKey}?lang=${lang}`;

    return (
        <Link
            key={subcatKey}
            href={targetUrl}
            className="category-link"
            style={{
                '--category-bg': backgrounds[subcatKey as keyof typeof backgrounds] || bgColor,
                '--category-hover-bg': backgrounds[`${subcatKey}-dark` as keyof typeof backgrounds] || bgColor,
            } as React.CSSProperties}
        >
            {(subcatLabel as string).toUpperCase()}
        </Link>
    )
}