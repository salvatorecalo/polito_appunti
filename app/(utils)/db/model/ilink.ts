import {Document} from "mongoose"
import { CategoryKey, SubCategoryKey } from "./course_and_sub_types";

export interface ILink extends Document {
    category: CategoryKey;
    subcategory: SubCategoryKey;
    name: string;             
    link: string;             
    sub: string | null;       
    is_ext: boolean | string;
    created_at?: Date;
}