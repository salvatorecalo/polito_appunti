import { GET_CONFIG_API } from "./endpoints";

export async function getCategories() {
    const response = await fetch(GET_CONFIG_API);
    const data = await response.json();
    const courses: {[key: string]: string} = data.courses;

    return courses;
}
