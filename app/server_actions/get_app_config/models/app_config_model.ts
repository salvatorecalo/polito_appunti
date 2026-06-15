import { CategoryKey, SubCategoryKey } from "@/app/(utils)/db/model/course_and_sub_types";

export interface AppConfig {
    categories_it: Record<CategoryKey, string>;
    subcats_it: Record<SubCategoryKey, Record<string, string>>;
    categories_en: Record<CategoryKey, string>;
    subcats_en: Record<SubCategoryKey, Record<string, string>>;
    logo: Record<string, string>;
    backgrounds: Record<string, string>;
}