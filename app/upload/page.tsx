export const dynamic = "force-dynamic"
import { Suspense } from "react";
import { getAppConfig } from "../server_actions/get_app_config/get_app_config";
import UploadPage from "./page/uploadPage";

export default async function Page(){
    const {categories_it, categories_en} = await getAppConfig();
    
    return (
        <Suspense fallback={<p style={{ textAlign: 'center', padding: '2rem' }}>Caricamento modulo...</p>}>
            <UploadPage courses_it={categories_it} courses_en={categories_en} />
        </Suspense>
    )
}