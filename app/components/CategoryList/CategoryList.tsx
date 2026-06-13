import './CategoryList.css'
import { getAppConfig } from '@/app/server_actions/get_app_config/get_app_config';
import { CategoryListClient } from './components/category_list_client/category_list_client';

export async function CategoryList() {
    const { categories_it, categories_en, backgrounds } = await getAppConfig()

    return (
       <CategoryListClient categories_it={categories_it} categories_en={categories_en} backgrounds={backgrounds} />
    );
}
