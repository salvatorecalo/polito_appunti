import { ReactNode } from "react"

export const en = {
    navbar: {
        addNotes: "Upload Notes",
        reportProblem: "Report a problem",
        workWithUs: "Work with us"
    },
    general: {
        networkError: "Network error. Unable to connect to the database.",
        goToMessage: "go to message"
    },
    footer: {
        footerText: (elm1: ReactNode, elm2: ReactNode) => ["Polito Appunti is a project ",elm1, " and uses these ", elm2],
        license: " license"
    },
    homepage: {
        mainHeading: "Search for free materials to prepare for your exams",
        materialTitle: (type: string) => `${type} material (on Telegram group)`
    },
    search: {
        loadingText: "Loading search results...",
        noResults: (query: string) => `No results found for: "${query}"`,
        searchOther: "Try searching for something else or check for typos.",
        results: (query: string) => `Results for: ${query}`
    },
    categoryPage: {
        uploadMaterialForCategory: "Upload material for this category",
        noDocuments: "No documents found for this section"
    },
    uploadPage: {
        uploadMaterial: "Upload Material",
        helpCommunity: "Contribute to the community by adding your notes",
        materialName: "Content name",
        materialNameExample: "E.g. Calculus 1 Exercises",
        telegramLinkMessage: "Telegram message link",
        requirementsStartWith: "Must strictly start with: https://t.me/appuntipolito",
        categoryCouse: "Course Category",
        selectACategory: "Select a category",
        genericMaterial: "GENERIC MATERIAL",
        completeAllFields: "⚠️ Fill out all fields correctly to unlock submission.",
        addMaterial: "Add material",
        categoryNotValid: "Invalid category selected",
        subcategoryNotValid: "Invalid subcategory/exam for this course",
        categoryDoesNotHaveSubcategory: "This category does not have subcategories",
        linkBadFormatted: "Link not allowed or not formatted as required",
        dbError: "Database error while saving",
        lang: "Lang"
    },
    credits: {
        websiteUse: "This website uses:",
        iconsBy: (link: ReactNode) => ["Icons by ", link],
        illustrationBy: (link: ReactNode) => ["Illustrations by ", link]
    },
    openSourceProject: {
        mainHeading: "📚 Polito Appunti is an open source project",
        description: `
            This platform was created to share and organize university notes in a simple and accessible way. <br />
            Anyone can contribute, improve the code, or report issues. <br />
            If you like the project, check out the repository on GitHub!
        `,
        repo: "Project repository"
    }
}