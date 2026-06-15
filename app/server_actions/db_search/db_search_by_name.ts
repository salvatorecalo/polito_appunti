'use server'

import LinkModel from "@/app/(utils)/db/schema/link_schema"
import connectToDb from "../db_connect/db_connect"
import { ILink } from "@/app/(utils)/db/model/ilink";

interface DbSearchByNameProps {
    name: string, 
    lang: string
}

export interface FormattedLink {
    id: string;
    name: string;
    link: string;
    category: string;
    sub: string | null;
    lang: string
}

/**
 * 
 * @param name: name of the document(s) to search
 * @returns filtered list of all material found caterogarized by int and ext
 * returns status:
 * -1 in case of missing name parameter
 * -4 in case of general error
 */
export async function dbSearchByName({name, lang="it"}: DbSearchByNameProps){
    const sanitizedQuery = name.trim()

    if (name.toLocaleLowerCase() === "run polito") {
        const int: FormattedLink[] = []
        const ext: FormattedLink[] = [
            {
                "id": "run_easter_egg",
                name: "Run polito",
                link: "https://www.runpolito.it",
                category: "run",
                sub: "run",
                lang: "en"
            }
        ]
        return {
            status: 0,
            int,
            ext // ext
        }
    }
    if (!name || sanitizedQuery === "") {
        return {
            "status": -1,
            "error": "Please specify a name",
        }
    }

    try {
        await connectToDb()
        const matchedLinks = await LinkModel.find({
            name: { $regex: sanitizedQuery, $options: 'i' },
            lang: lang
        }).lean() as unknown as ILink[]
        console.log(matchedLinks)
        const int: FormattedLink[] = []
        const ext: FormattedLink[] = []

        matchedLinks.map((item: any) => {
            const formattedLink: FormattedLink = {
                id: item._id.toString(),
                name: item.name,
                link: item.link,
                category: item.category,
                sub: item.sub,
                lang: item.lang
            };

            if (item.is_ext) {
                ext.push(formattedLink);
            } else {
                int.push(formattedLink);
            }
        })
        
        return {
            status: 0,
            int,
            ext
        }
    } catch (e) {
        return {
            status: -4,
            error: e
        }
    }
}