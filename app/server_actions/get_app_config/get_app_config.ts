'use server'

import { AppConfig } from "./models/app_config_model"

/**
 * * @returns json with all data
 */
export async function getAppConfig(): Promise<AppConfig> {

    return {
        "categories_it": {
            "dummy": "TESTING ONLY",
            "ing": "TEST D'INGRESSO",
            "1st": "1 ANNO TRIENNALE",
            "2nd": "2 ANNO TRIENNALE (COMUNE)",
            "lib": "CREDITI LIBERI TRIENNALE",
            "aer": "TRIENNALE AEROSPAZIALE",
            "bio": "TRIENNALE BIOMEDICA",
            "cin": "TRIENNALE CINEMA",
            "elt": "TRIENNALE ELETTRONICA",
            "fis": "TRIENNALE FISICA",
            "mech": "TRIENNALE MECCANICA",
            "ges": "TRIENNALE GESTIONALE",
            "inf": "TRIENNALE INFORMATICA",
            "mat": "TRIENNALE MATEMATICA",
            "biomag": "MAGISTRALE BIOMEDICA",
            "eltmag": "MAGISTRALE ELETTRONICA",
            "enrmag": "MAGISTRALE ENERGETICA",
            "gesmag": "MAGISTRALE GESTIONALE",
            "nfimag": "MAGISTRALE NANOTECHNOLOGIES FOR ICTS"
        },
        "subcats_it": {
            "dummy": {
                "d1": "DUMMY SUB1",
                "d2": "DUMMY SUB2"
            },
            "1st": {
                "alg": "ALGEBRA",
                "an1": "ANALISI 1",
                "chim": "CHIMICA",
                "fis": "FISICA 1",
                "ielts": "IELTS",
                "inf": "INFORMATICA"
            },
            "bio": {
                "bes": "Strumentazione biomedica e sicurezza",
                "stm": "Scienze e Tecnologia dei Materiali"
            },
            "lib": {
                "nano": "Introduzione alle nanotecnologie",
                "tecambsitprod": "Tecnologie Ambientali dei Siti produttivi"
            }
        },
        "categories_en": {
            "dummy": "TESTING ONLY",
            "ing": "ADMISSION TEST",
            "1st": "1ST YEAR BACHELOR'S",
            "2nd": "2ND YEAR BACHELOR'S (COMMON)",
            "lib": "BACHELOR'S FREE CREDITS",
            "aer": "BACHELOR'S AEROSPACE",
            "bio": "BACHELOR'S BIOMEDICAL",
            "cin": "BACHELOR'S CINEMA",
            "elt": "BACHELOR'S ELECTRONICS",
            "fis": "BACHELOR'S PHYSICS",
            "ges": "BACHELOR'S MANAGEMENT",
            "inf": "BACHELOR'S COMPUTER ENGINEERING",
            "mat": "BACHELOR'S MATHEMATICS",
            "mech": "BACHELOR'S MECHANICAL",
            "biomag": "MASTER'S BIOMEDICAL",
            "eltmag": "MASTER'S ELECTRONICS",
            "enrmag": "MASTER'S ENERGY",
            "gesmag": "MASTER'S MANAGEMENT",
            "nfimag": "MASTER'S NANOTECHNOLOGIES FOR ICTS"
        },
        "subcats_en": {
            "dummy": {
                "d1": "DUMMY SUB1",
                "d2": "DUMMY SUB2"
            },
            "1st": {
                "alg": "LINEAR ALGEBRA",
                "an1": "CALCULUS 1",
                "chim": "CHEMISTRY",
                "fis": "PHYSICS 1",
                "ielts": "IELTS",
                "inf": "COMPUTER SCIENCE"
            },
            "bio": {
                "bes": "Biomedical Instrumentation and Safety",
                "stm": "Materials Science and Technology"
            },
            "lib": {
                "nano": "Introduction to Nanotechnology",
                "tecambsitprod": "Environmental Technologies for Production Sites"
            }
        },
        "logo": {
            "1st": "/img/1st.webp",
            "aer": "/img/aer.webp",
            "mech": "/img/mech.webp",
            "bio": "/img/bio.webp",
            "cin": "/img/cin.webp",
            "enrmag": "/img/enrmag.webp",
            "fis": "/img/fis.webp",
            "ges": "/img/ges.webp",
            "inf": "/img/inf.webp",
            "mat": "/img/mat.webp",
            "nfimag": "/img/nfimag.webp"
        },
        "backgrounds": {
            "dummy": "#64748b",
            "dummy-dark": "#475569",
            
            "ing": "#f59e0b",
            "ing-dark": "#d97706",
            
            "1st": "#4264d3",
            "1st-dark": "#2b47b1",
            
            "2nd": "#3b82f6",
            "2nd-dark": "#1d4ed8",
            
            "lib": "#10b981",
            "lib-dark": "#047857",
            
            "aer": "#0284c7",
            "aer-dark": "#0369a1",
            
            "bio": "#0d9488",
            "bio-dark": "#0f766e",
            
            "cin": "#db2777",
            "cin-dark": "#b5175f",
            
            "elt": "#ea580c",
            "elt-dark": "#c2410c",
            
            "fis": "#334155",
            "fis-dark": "#1e293b",
            
            "mech": "#c72fc7",
            "mech-dark": "#850e85",

            "ges": "#854d0e",
            "ges-dark": "#653a0a",
            
            "inf": "#065f46",
            "inf-dark": "#044332",
            
            "mat": "#1e1b4b",
            "mat-dark": "#121033",
            
            "biomag": "#115e59",
            "biomag-dark": "#0d4844",
            
            "eltmag": "#6d28d9",
            "eltmag-dark": "#551a8b",
            
            "enrmag": "#b45309",
            "enrmag-dark": "#8c3f06",
            
            "gesmag": "#701a75",
            "gesmag-dark": "#521156",
            
            "nfimag": "#4c1d95",
            "nfimag-dark": "#36136b"
        },
    }
}