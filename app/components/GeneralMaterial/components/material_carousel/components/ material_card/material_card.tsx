"use client"
import Image from "next/image";
import './material_card.css'
import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";

interface MaterialCardProp {
    item: FormattedLink
    text: string,
    idx: string
}

export function MaterialCard({item, text, idx}: MaterialCardProp) {
    
    function getLocationPath(){
        if (item.sub) {
            return `/img/${item.sub}.webp`;
        }
        if (item.category && item.category !== "gen") {
            return `/img/${item.category}.webp`;
        }
    }

    return (
        <article key={`${text}-${item.id || idx}`} className="material-card">
            <div className="card-icon-wrapper">
                <Image src={getLocationPath() || "/default_icon.webp"} alt={`${item.name} icon`} width={50} height={50} />
            </div>
            <h3>{item.name}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
                Vai al messaggio
            </a>
        </article>
    )
}