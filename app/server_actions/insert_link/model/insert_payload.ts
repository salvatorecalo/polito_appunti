import { CategoryKey, SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";

export interface InsertPayload {
    name: string,
    link: string,
    category: CategoryKey,
    sub: SubCategoryKey | null
}