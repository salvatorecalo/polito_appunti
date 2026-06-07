import { getAppConfig } from "../server_actions/get_app_config/get_app_config";
import UploadPage from "./page/uploadPage";

export default async function Page(){
    const {categories} = await getAppConfig();
    
    return (
        <UploadPage courses={categories}/>
    )
}