import LinkModel from "@/app/(utils)/db/schema/link_schema"
import connectToDb from "../db_connect/db_connect"
import { FormattedLink } from "./db_search_by_name"


interface DbSearchByCategoryProp {
    category: string
}

/**
 * 
 * @param desc: desc of the document(s) to search (it's the name but i put it in honor of the first contributor @lithium333)
 * @returns filtered list of all material found caterogarized by int and ext
 * returns status:
 * -1 in case of missing category parameter
 * -4 in case of general error
 */
export async function dbSearchByCategory({category}: DbSearchByCategoryProp){
    const sanitizedCategory = category.trim()

    if (!category || sanitizedCategory === "") {
        return {
            status: -1,
            error: "Please specify a category"
        }
    }

    try {
        await connectToDb()
        const matchedLinks = await LinkModel.find({
            category: sanitizedCategory
        }).lean()

        const int: FormattedLink[] = []
        const ext: FormattedLink[] = []

        matchedLinks.forEach((item) => {
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
        console.log(`Error initializing database ${e}`)
        return {
            status: "-4",
            error: e
        }
    }
}