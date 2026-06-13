'use server'
import LinkModel from "@/app/(utils)/db/schema/link_schema";
import { getAppConfig } from "../get_app_config/get_app_config";
import { InsertPayload } from "./model/insert_payload";
import connectToDb from "../db_connect/db_connect";
import { SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";

/**
 * 
 * @param payload 
 * @returns json with status 
 * Status enum {
 *  0: all correct
 *  -1: missing category
 *  -2: missing subcategory
 *  -3: missing course in subcategories
 *  -4: malformed telegram link
 *  -5: general error (with error)
 * }
 */
export async function insertLink(payload: InsertPayload){
    try {
        await connectToDb()
        const config = await getAppConfig()
        const { name, link, category, sub } = payload

        /*
          If we cannot find the specified category or it's not in the general
          we return status -1
        */
        if (!(category in config.categories_it) && category !== "gen") {
            return {status: -1} 
        }

        /*
         * If the sub is present
         */
        if (sub !== null){
            /*
                If our category is one of the option of the subcats in the getAppConfig json
            */
            
            if (category in config.subcats_it){
                const categorySubcats = config.subcats_it[category as SubCategoryKey]
                /*
                    If we cannot find the specified subcategory
                    we return status -2
                */
                if (!(sub in categorySubcats)){
                    return {status: -2}
                }
            } else {
                /*
                    If we cannot find the specified course in subcategory
                    we return status -3
                */
                return {status: -3}
            }
        }
        
        /*
            If the telegram link is not well formatted 
            we return status -4
        */
        const prefix: string = "https://t.me/appuntipolito/"
        if (!link || !link.startsWith(prefix)){
            return {status: -4}
        }
        const newLink = new LinkModel({
            category, 
            sub,
            name, 
            link, 
            is_ext: false
        })
        await newLink.save()

        return {
            status: 0
        }
    } catch (e: any) {
        const defaultObject = {
            err: e.toString(),
            status: -5
        }
        return defaultObject // generic error 
    }
}