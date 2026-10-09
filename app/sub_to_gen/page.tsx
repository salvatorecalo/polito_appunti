import { restoreAndChangeSub } from "../server_actions/change_to_sub"

export default async function SubToGen() {
    await restoreAndChangeSub()
    
    return (
        <></>
    )
}