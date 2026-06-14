import { getAppConfig } from "@/app/server_actions/get_app_config/get_app_config";
import Image from "next/image";
import '../../../CategoryPage.css'
import { FormattedLink } from "@/app/server_actions/db_search/db_search_by_name";
import { GoToMessageButton } from "./components/go_to_message_button/go_to_message_button";

interface MaterialCardProp {
    item: FormattedLink,
    text: string,
    idx: string
}

export async function CategoryMaterialCard({item, text, idx}: MaterialCardProp) {
    const appConfig = await getAppConfig()

    function setIcon(sub: string){
       if (sub in appConfig.logo) {
            return appConfig.logo[sub]
        }
        return "/default_icon.webp"
    }

    return (
        <article key={`${text}-${item.id || idx}`}>
            <div className="card-icon-wrapper">
                <Image src={setIcon(item.sub || "") || "/default_icon.webp"} alt={`${item.name} icon`} width={50} height={50} />
            </div>
            <h3>{item.name}</h3>
            <Image src={item.lang === "it" ? "/it_flag.svg" : "/en_flag.png"} width={20} height={20} alt="language flag" />
            <GoToMessageButton item={item} />
        </article>
    )
}