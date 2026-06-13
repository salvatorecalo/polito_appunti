import { ReactNode } from "react"

export const it = {
    navbar: {
        addNotes: "Carica Appunti",
        reportProblem: "Segnala un problema",
        workWithUs: "Collabora con noi"
    },
    footer: {
        footerText: (elm1: ReactNode, elm2: ReactNode) => ["Polito Appunti è un progetto ",elm1, " e fa uso delle seguenti ", elm2],
        license: " licenze"
    },
    general: {
        networkError: "Errore di rete. Impossibile contattare il database.",
        goToMessage: "vai al messaggio"
    },
    homepage: {
        mainHeading: "Cerca gratuitamente il materiale per preparare i tuoi esami",
        materialTitle: (type: string) => `Materiale ${type} (al gruppo telegram)`
    },
    search: {
        loadingText: "Caricamento della ricerca in corso...",
        noResults: (query: string) => `Nessun risultato trovato per: "${query}"`,
        searchOther: "Prova a cercare qualcos' altro o verifica la presenza di errori di battitura.",
        results: (query: string) => `Risultati per: ${query}`
    },
    categoryPage: {
        uploadMaterialForCategory: "Carica materiale per questa categoria",
        noDocuments: "Nessun documento trovato per questa sezione"
    },
    uploadPage: {
        uploadMaterial: "Carica Materiale",
        helpCommunity: "Contribuisci alla community aggiungendo i tuoi appunti",
        materialName: "Nome del contenuto",
        materialNameExample: "Es. Esercizi di Analisi 1",
        telegramLinkMessage: "Link al messaggio telegram",
        requirementsStartWith: "Deve iniziare tassativamente con: https://t.me/appuntipolito",
        categoryCouse: "Categoria Corso",
        selectACategory: "Seleziona una categoria",
        genericMaterial: "MATERIALE GENERICO",
        completeAllFields: "⚠️ Compila tutti i campi correttamente per sbloccare l'invio.",
        addMaterial: "Aggiungi materiale",
        categoryNotValid: "Categoria selezionata non valida",
        subcategoryNotValid: "Sottocategoria/Esame non valido per questo corso",
        categoryDoesNotHaveSubcategory: "Questa categoria non prevede sottocategorie",
        linkBadFormatted: "Link non consentito o non formattato come richiesto",
        dbError: "Errore del database durante il salvataggio",
    },
    credits: {
        websiteUse: "Questo sito web fa uso:",
        iconsBy: (link: ReactNode) => ["Delle icone di", link],
        illustrationBy: (link: ReactNode) => ["Delle illustrazioni", link]
    },
    openSourceProject: {
        mainHeading: "📚 Polito Appunti è un progetto open source",
        description: `
            Questa piattaforma nasce per condividere e organizzare appunti universitari in modo semplice e accessibile. <br />
            Chiunque può contribuire, migliorare il codice o segnalare problemi. <br />
            Se ti piace il progetto, dai un’occhiata al repository su GitHub!
        `,
        repo: "Repo progetto"
    }
}