import { CategoryKey, SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";

export interface AppConfig {
    categories: Record<CategoryKey, string>;
    subcats: Record<SubCategoryKey, Record<string, string>>;
    logo: Record<string, string>;
    backgrounds: Record<string, string>;
    color_h1: Record<string, string>;
}