'use server'

import { AppConfig } from "./models/app_config_model"

/**
 * @returns json with all PoliTO categories, subcategories, logos, and color palettes
 */
export async function getAppConfig(): Promise<AppConfig> {

    return {
        "categories_it": {
            "dummy": "TESTING ONLY",
            "ing": "TEST D'INGRESSO (TIL)",
            "1st": "1 ANNO TRIENNALE",
            "2nd": "2 ANNO TRIENNALE (COMUNE)",
            "lib": "CREDITI LIBERI TRIENNALE",
            "aer": "TRIENNALE AEROSPAZIALE",
            "aut": "TRIENNALE AUTOVEICOLO",
            "bio": "TRIENNALE BIOMEDICA",
            "cin": "TRIENNALE CINEMA & MEDIA",
            "civ": "TRIENNALE CIVILE",
            "ele": "TRIENNALE ELETTRICA",
            "elt": "TRIENNALE ELETTRONICA",
            "enr": "TRIENNALE ENERGETICA",
            "fis": "TRIENNALE FISICA",
            "ges": "TRIENNALE GESTIONALE",
            "inf": "TRIENNALE INFORMATICA",
            "mat": "TRIENNALE MATEMATICA",
            "mech": "TRIENNALE MECCANICA",
            "amb": "TRIENNALE AMBIENTE E TERRITORIO",
            "arch": "TRIENNALE ARCHITETTURA",
            "des": "TRIENNALE DESIGN E COMUNICAZIONE",
            
            // MAGISTRALI
            "aermag": "MAGISTRALE AEROSPAZIALE",
            "autmag": "MAGISTRALE MECCATRONICA & AUTOVEICOLO",
            "biomag": "MAGISTRALE BIOMEDICA",
            "civmag": "MAGISTRALE CIVILE",
            "cybmag": "MAGISTRALE CYBERSECURITY",
            "datmag": "MAGISTRALE DATA SCIENCE",
            "eltmag": "MAGISTRALE ELETTRONICA",
            "enrmag": "MAGISTRALE ENERGETICA",
            "gesmag": "MAGISTRALE GESTIONALE",
            "infmag": "MAGISTRALE INFORMATICA",
            "mechmag": "MAGISTRALE MECCANICA",
            "nfimag": "MAGISTRALE NANOTECHNOLOGIES FOR ICTS",
            "archmag": "MAGISTRALE ARCHITETTURA"
        },
        "subcats_it": {
            "dummy": {
                "dummy_d1": "DUMMY SUB1",
                "dummy_d2": "DUMMY SUB2"
            },
            "ing": {
                "ing_mat": "MATEMATICA",
                "ing_fis": "FISICA",
                "ing_dis": "DISEGNO TECNICO",
                "ing_log": "LOGICA E COMPRENSIONE VERBALE",
                "ing_gen": "GENERALE"
            },
            "1st": {
                "1st_alg": "ALGEBRA LINEARE E GEOMETRIA",
                "1st_an1": "ANALISI MATEMATICA I",
                "1st_chim": "CHIMICA",
                "1st_fis": "FISICA I",
                "1st_ielts": "LINGUA INGLESE (IELTS)",
                "1st_inf": "INFORMATICA",
                "1st_tec": "TECNICHE DI PROGRAMMAZIONE",
                "1st_gen": "GENERALE"
            },
            "2nd": {
                "2nd_an2": "ANALISI MATEMATICA II",
                "2nd_eletcn": "ELETTROTECNICA",
                "2nd_fis2": "FISICA II",
                "2nd_mechraz": "MECCANICA RAZIONALE",
                "2nd_scicost": "SCIENZA DELLE COSTRUZIONI",
                "2nd_gen": "GENERALE"
            },
            "aer": {
                "aer_eletcn": "ELETTROTECNICA",
                "aer_dis": "DISEGNO TECNICO INDUSTRIALE",
                "aer_fld": "FLUIDODINAMICA",
                "aer_str": "STRUTTURE AEROSPAZIALI",
                "aer_prop": "PROPULSIONE AEROSPAZIALE",
                "aer_gen": "GENERALE"
            },
            "aut": {
                "aut_din": "DINAMICA DEL VEICOLO",
                "aut_mot": "MOTORI A COMBUSTIONE INTERNA",
                "aut_dis": "DISEGNO DI AUTOVEICOLI",
                "aut_macc": "MECCANICA APPLICATA ALLE MACCHINE",
                "aut_gen": "GENERALE"
            },
            "bio": {
                "bio_bes": "Strumentazione biomedica e sicurezza",
                "bio_stm": "Scienze e Tecnologia dei Materiali",
                "bio_eletch": "ELETTROTECNICA",
                "bio_dis": "DISEGNO TECNICO",
                "bio_fisio": "FISIOLOGIA UMANA",
                "bio_mech": "BIOMECCANICA",
                "bio_gen": "GENERALE"
            },
            "cin": {
                "cin_stcin": "Storia del Cinema",
                "cin_tecmul": "Tecnologie Multimediali",
                "cin_promul": "Produzione Multimediale",
                "cin_sem": "Semiotica e Storytelling",
                "cin_gen": "GENERALE"
            },
            "civ": {
                "civ_idr": "Idraulica",
                "civ_geo": "Geotecnica",
                "civ_teccost": "Tecnica delle Costruzioni",
                "civ_top": "Topografia e Cartografia",
                "civ_gen": "GENERALE"
            },
            "ele": {
                "ele_maccele": "Macchine Elettriche",
                "ele_impele": "Impianti Elettrici",
                "ele_mis": "Misure Elettriche ed Elettroniche",
                "ele_gen": "GENERALE"
            },
            "elt": {
                "elt_dig": "Elettronica Digitale",
                "elt_ana": "Elettronica Analogica",
                "elt_sig": "Segnali e Sistemi",
                "elt_mcro": "Microelettronica e Dispositivi",
                "elt_campi": "Campi Elettromagnetici",
                "elt_gen": "GENERALE"
            },
            "enr": {
                "enr_fistec": "Fisica Tecnica",
                "enr_maccterm": "Macchine Termiche",
                "enr_impener": "Impianti Energetici",
                "enr_gen": "GENERALE"
            },
            "fis": {
                "fis_meccan": "Meccanica Quantistica",
                "fis_mat": "Fisica Matematica",
                "fis_ott": "Ottica e Fotonica",
                "fis_stato": "Fisica dello Stato Solido",
                "fis_gen": "GENERALE"
            },
            "ges": {
                "ges_eco": "Economia e Organizzazione Aziendale",
                "ges_pr": "Gestione dei Progetti (Project Management)",
                "ges_ricop": "Ricerca Operativa",
                "ges_prod": "Gestione dei Sistemi Produttivi",
                "ges_statis": "Statistica e Analisi Dati",
                "ges_gen": "GENERALE"
            },
            "inf": {
                "inf_poo": "Programmazione a Oggetti (OOP)",
                "inf_asd": "Algoritmi e Strutture Dati",
                "inf_db": "Basi di Dati",
                "inf_so": "Sistemi Operativi",
                "inf_net": "Reti di Calcolatori",
                "inf_archcalc": "Architettura dei Calcolatori",
                "inf_aut": "Controlli Automatici",
                "inf_gen": "GENERALE"
            },
            "mat": {
                "mat_algeb": "Algebra Astratta e Numerica",
                "mat_anreal": "Analisi Reale e Complessa",
                "mat_prob": "Calcolo delle Probabilità e Statistica",
                "mat_calcnom": "Calcolo Numerico",
                "mat_gen": "GENERALE"
            },
            "mech": {
                "mech_disind": "Disegno Tecnico Industriale",
                "mech_fistec": "Fisica Tecnica e Termodinamica",
                "mech_macc": "Meccanica Applicata alle Macchine",
                "mech_tecmec": "Tecnologie Meccaniche",
                "mech_costmec": "Costruzione di Macchine",
                "mech_gen": "GENERALE"
            },
            "amb": {
                "amb_ecol": "Ecologia Applicata",
                "amb_idrolog": "Idrologia",
                "amb_ingamb": "Ingegneria Sanitaria e Ambientale",
                "amb_gen": "GENERALE"
            },
            "arch": {
                "arch_starch": "Storia dell'Architettura",
                "arch_labpros": "Laboratorio di Progettazione",
                "arch_rest": "Restauro Architettonico",
                "arch_urban": "Urbanistica",
                "arch_gen": "GENERALE"
            },
            "des": {
                "des_desind": "Product Design",
                "des_graf": "Grafica e Visual Design",
                "des_uxui": "User Experience e UI Design",
                "des_gen": "GENERALE"
            },
            "lib": {
                "lib_nano": "Introduzione alle nanotecnologie",
                "lib_tecamb": "Tecnologie Ambientali dei Siti produttivi",
                "lib_diritto": "Diritto dell'Economia e dell'Innovazione",
                "lib_gen": "GENERALE"
            },

            // MAGISTRALI SUB
            "aermag": {
                "aermag_aerodyn": "Aerodinamica Avanzata e Gasdinamica",
                "aermag_spaciesys": "Sistemi Spaziali e Meccanica Orbitale",
                "aermag_aerostruct": "Strutture e Materiali Compositi",
                "aermag_gen": "GENERALE"
            },
            "autmag": {
                "autmag_ev": "Veicoli Elettrici ed Ibridi",
                "autmag_adas": "Sistemi di Guida Autonoma (ADAS)",
                "autmag_nvh": "Rumore e Vibrazioni (NVH)",
                "autmag_gen": "GENERALE"
            },
            "biomag": {
                "biomag_biomater": "Biomateriali Avanzati",
                "biomag_elabor": "Elaborazione di Segnali e Immagini Biomediche",
                "biomag_protesi": "Progettazione di Protesi e Organi Artificiali",
                "biomag_gen": "GENERALE"
            },
            "civmag": {
                "civmag_structeng": "Ingegneria delle Strutture in C.A. e Acciaio",
                "civmag_geotech": "Geotecnica Avanzata",
                "civmag_infrastr": "Infrastrutture Viarie e Trasporti",
                "civmag_gen": "GENERALE"
            },
            "cybmag": {
                "cybmag_netsec": "Sicurezza delle Reti e Crittografia",
                "cybmag_ethhack": "Ethical Hacking e Malware Analysis",
                "cybmag_softsec": "Software e System Security",
                "cybmag_gen": "GENERALE"
            },
            "datmag": {
                "datmag_bigdata": "Big Data Processing Systems",
                "datmag_statlearn": "Statistical Learning",
                "datmag_deeplearn": "Deep Learning e Computer Vision",
                "datmag_gen": "GENERALE"
            },
            "eltmag": {
                "eltmag_vlsidesign": "Progettazione Sistemi VLSI",
                "eltmag_rf": "Elettronica a Radiofrequenza e Microonde",
                "eltmag_sensori": "Sensori e Microsistemi (MEMS)",
                "eltmag_gen": "GENERALE"
            },
            "enrmag": {
                "enrmag_rinnovabili": "Energie Rinnovabili e Sostenibilità",
                "enrmag_nuclear": "Ingegneria Nucleare e Termofisica Avanzata",
                "enrmag_effener": "Efficienza Energetica negli Edifici e nell'Industria",
                "enrmag_gen": "GENERALE"
            },
            "gesmag": {
                "gesmag_supply": "Supply Chain Management",
                "gesmag_finanz": "Finanza Aziendale e Valutazione Investimenti",
                "gesmag_digitalbus": "Digital Business Transformation",
                "gesmag_gen": "GENERALE"
            },
            "infmag": {
                "infmag_distsys": "Sistemi Distribuiti e Cloud Computing",
                "infmag_ml": "Machine Learning e Intelligenza Artificiale",
                "infmag_webinfo": "Web Information Systems",
                "infmag_sweng": "Ingegneria del Software Avanzata",
                "infmag_gen": "GENERALE"
            },
            "mechmag": {
                "mechmag_robotics": "Robotica Industriale e Automazione",
                "mechmag_fem": "Analisi agli Elementi Finiti (FEM)",
                "mechmag_tribo": "Tribologia e Progettazione Organi Meccanici",
                "mechmag_gen": "GENERALE"
            },
            "nfimag": {
                "nfimag_nanodev": "Nanodevices and Quantum Electronics",
                "nfimag_nanofab": "Nanofabrication Technologies",
                "nfimag_bionano": "Bionanotechnology",
                "nfimag_gen": "GENERALE"
            },
            "archmag": {
                "archmag_archdesign": "Progettazione Architettonica Avanzata",
                "archmag_restauro": "Conservazione del Patrimonio",
                "archmag_bim": "Building Information Modeling (BIM)",
                "archmag_gen": "GENERALE"
            }
        },
        "categories_en": {
            "dummy": "TESTING ONLY",
            "ing": "ADMISSION TEST (TIL)",
            "1st": "1ST YEAR BACHELOR'S",
            "2nd": "2ND YEAR BACHELOR'S (COMMON)",
            "lib": "BACHELOR'S FREE CREDITS",
            "aer": "BACHELOR'S AEROSPACE",
            "aut": "BACHELOR'S AUTOMOTIVE",
            "bio": "BACHELOR'S BIOMEDICAL",
            "cin": "BACHELOR'S CINEMA & MEDIA",
            "civ": "BACHELOR'S CIVIL",
            "ele": "BACHELOR'S ELECTRICAL",
            "elt": "BACHELOR'S ELECTRONICS",
            "enr": "BACHELOR'S ENERGY",
            "fis": "BACHELOR'S PHYSICS",
            "ges": "BACHELOR'S MANAGEMENT",
            "inf": "BACHELOR'S COMPUTER ENGINEERING",
            "mat": "BACHELOR'S MATHEMATICS",
            "mech": "BACHELOR'S MECHANICAL",
            "amb": "BACHELOR'S ENVIRONMENTAL",
            "arch": "BACHELOR'S ARCHITECTURE",
            "des": "BACHELOR'S DESIGN",
            
            // MASTERS
            "aermag": "MASTER'S AEROSPACE",
            "autmag": "MASTER'S MECHATRONICS & AUTOMOTIVE",
            "biomag": "MASTER'S BIOMEDICAL",
            "civmag": "MASTER'S CIVIL",
            "cybmag": "MASTER'S CYBERSECURITY",
            "datmag": "MASTER'S DATA SCIENCE",
            "eltmag": "MASTER'S ELECTRONICS",
            "enrmag": "MASTER'S ENERGY",
            "gesmag": "MASTER'S MANAGEMENT",
            "infmag": "MASTER'S COMPUTER ENGINEERING",
            "mechmag": "MASTER'S MECHANICAL",
            "nfimag": "MASTER'S NANOTECHNOLOGIES FOR ICTS",
            "archmag": "MASTER'S ARCHITECTURE"
        },
        "subcats_en": {
            "dummy": {
                "dummy_d1": "DUMMY SUB1",
                "dummy_d2": "DUMMY SUB2"
            },
            "ing": {
                "ing_mat": "MATH",
                "ing_fis": "PHYSICS",
                "ing_dis": "TECHNICAL DRAWING",
                "ing_log": "LOGIC AND VERBAL REASONING",
                "ing_gen": "GENERAL"
            },
            "1st": {
                "1st_alg": "LINEAR ALGEBRA AND GEOMETRY",
                "1st_an1": "CALCULUS 1",
                "1st_chim": "CHEMISTRY",
                "1st_fis": "PHYSICS 1",
                "1st_ielts": "ENGLISH LANGUAGE (IELTS)",
                "1st_inf": "COMPUTER SCIENCE",
                "1st_tec": "PROGRAMMING TECHNIQUES",
                "1st_gen": "GENERAL"
            },
            "2nd": {
                "2nd_an2": "CALCULUS II",
                "2nd_eletcn": "ELECTRICAL ENGINEERING",
                "2nd_fis2": "PHYSICS II",
                "2nd_mechraz": "RATIONAL MECHANICS",
                "2nd_scicost": "MECHANICS OF MATERIALS"
            },
            "aer": {
                "aer_eletcn": "ELECTRICAL ENGINEERING",
                "aer_dis": "TECHNICAL DRAWING",
                "aer_fld": "FLUID DYNAMICS",
                "aer_str": "AEROSPACE STRUCTURES",
                "aer_prop": "AEROSPACE PROPULSION",
                "aer_gen": "GENERAL"
            },
            "aut": {
                "aut_din": "VEHICLE DYNAMICS",
                "aut_mot": "INTERNAL COMBUSTION ENGINES",
                "aut_dis": "AUTOMOTIVE DRAWING",
                "aut_macc": "APPLIED MECHANICS"
            },
            "bio": {
                "bio_bes": "Biomedical Instrumentation and Safety",
                "bio_stm": "Materials Science and Technology",
                "bio_eletch": "ELECTRICAL ENGINEERING",
                "bio_dis": "TECHNICAL DRAWING",
                "bio_fisio": "HUMAN PHYSIOLOGY",
                "bio_mech": "BIOMECHANICS"
            },
            "cin": {
                "cin_stcin": "History of Cinema",
                "cin_tecmul": "Multimedia Technologies",
                "cin_promul": "Multimedia Production",
                "cin_sem": "Semiotics and Storytelling"
            },
            "civ": {
                "civ_idr": "Hydraulics",
                "civ_geo": "Geotechnics",
                "civ_teccost": "Structural Engineering",
                "civ_top": "Topography and Cartography"
            },
            "ele": {
                "ele_maccele": "Electrical Machines",
                "ele_impele": "Electrical Systems",
                "ele_mis": "Electrical and Electronic Measurements"
            },
            "elt": {
                "elt_dig": "Digital Electronics",
                "elt_ana": "Analog Electronics",
                "elt_sig": "Signals and Systems",
                "elt_mcro": "Microelectronics and Devices",
                "elt_campi": "Electromagnetic Fields"
            },
            "enr": {
                "enr_fistec": "Engineering Thermodynamics",
                "enr_maccterm": "Thermal Machines",
                "enr_impener": "Energy Systems"
            },
            "fis": {
                "fis_meccan": "Quantum Mechanics",
                "fis_mat": "Mathematical Physics",
                "fis_ott": "Optics and Photonics",
                "fis_stato": "Solid State Physics"
            },
            "ges": {
                "ges_eco": "Economics and Business Organization",
                "ges_pr": "Project Management",
                "ges_ricop": "Operations Research",
                "ges_prod": "Production Systems Management",
                "ges_statis": "Statistics and Data Analysis"
            },
            "inf": {
                "inf_poo": "Object-Oriented Programming (OOP)",
                "inf_asd": "Algorithms and Data Structures",
                "inf_db": "Database Systems",
                "inf_so": "Operating Systems",
                "inf_net": "Computer Networks",
                "inf_archcalc": "Computer Architecture",
                "inf_aut": "Automatic Control"
            },
            "mat": {
                "mat_algeb": "Abstract and Numerical Algebra",
                "mat_anreal": "Real and Complex Analysis",
                "mat_prob": "Probability and Statistics",
                "mat_calcnom": "Numerical Analysis"
            },
            "mech": {
                "mech_disind": "Industrial Technical Drawing",
                "mech_fistec": "Thermodynamics and Heat Transfer",
                "mech_macc": "Mechanics Applied to Machines",
                "mech_tecmec": "Manufacturing Technologies",
                "mech_costmec": "Machine Design"
            },
            "amb": {
                "amb_ecol": "Applied Ecology",
                "amb_idrolog": "Hydrology",
                "amb_ingamb": "Environmental Engineering"
            },
            "arch": {
                "arch_starch": "History of Architecture",
                "arch_labpros": "Architectural Design Lab",
                "arch_rest": "Architectural Restoration",
                "arch_urban": "Urban Planning"
            },
            "des": {
                "des_desind": "Product Design",
                "des_graf": "Graphic and Visual Design",
                "des_uxui": "UX and UI Design"
            },
            "lib": {
                "lib_nano": "Introduction to Nanotechnology",
                "lib_tecamb": "Environmental Technologies for Production Sites",
                "lib_diritto": "Law of Economy and Innovation"
            },

            // MASTERS SUB
            "aermag": {
                "aermag_aerodyn": "Advanced Aerodynamics and Gas Dynamics",
                "aermag_spaciesys": "Space Systems and Orbital Mechanics",
                "aermag_aerostruct": "Composite Structures and Materials"
            },
            "autmag": {
                "autmag_ev": "Electric and Hybrid Vehicles",
                "autmag_adas": "Autonomous Driving Systems (ADAS)",
                "autmag_nvh": "Noise, Vibration and Harshness (NVH)"
            },
            "biomag": {
                "biomag_biomater": "Advanced Biomaterials",
                "biomag_elabor": "Biomedical Signal and Image Processing",
                "biomag_protesi": "Prosthesis and Artificial Organ Design"
            },
            "civmag": {
                "civmag_structeng": "Reinforced Concrete and Steel Structural Engineering",
                "civmag_geotech": "Advanced Geotechnics",
                "civmag_infrastr": "Transport Infrastructure"
            },
            "cybmag": {
                "cybmag_netsec": "Network Security and Cryptography",
                "cybmag_ethhack": "Ethical Hacking and Malware Analysis",
                "cybmag_softsec": "Software and System Security"
            },
            "datmag": {
                "datmag_bigdata": "Big Data Processing Systems",
                "datmag_statlearn": "Statistical Learning",
                "datmag_deeplearn": "Deep Learning and Computer Vision"
            },
            "eltmag": {
                "eltmag_vlsidesign": "VLSI System Design",
                "eltmag_rf": "RF and Microwave Electronics",
                "eltmag_sensori": "Sensors and Microsystems (MEMS)"
            },
            "enrmag": {
                "enrmag_rinnovabili": "Renewable Energy and Sustainability",
                "enrmag_nuclear": "Nuclear Engineering and Advanced Thermofluid Dynamics",
                "enrmag_effener": "Energy Efficiency in Buildings and Industry"
            },
            "gesmag": {
                "gesmag_supply": "Supply Chain Management",
                "gesmag_finanz": "Corporate Finance and Investment Valuation",
                "gesmag_digitalbus": "Digital Business Transformation"
            },
            "infmag": {
                "infmag_distsys": "Distributed Systems and Cloud Computing",
                "infmag_ml": "Machine Learning and Artificial Intelligence",
                "infmag_webinfo": "Web Information Systems",
                "infmag_sweng": "Advanced Software Engineering"
            },
            "mechmag": {
                "mechmag_robotics": "Industrial Robotics and Automation",
                "mechmag_fem": "Finite Element Analysis (FEM)",
                "mechmag_tribo": "Tribology and Mechanical Component Design"
            },
            "nfimag": {
                "nfimag_nanodev": "Nanodevices and Quantum Electronics",
                "nfimag_nanofab": "Nanofabrication Technologies",
                "nfimag_bionano": "Bionanotechnology"
            },
            "archmag": {
                "archmag_archdesign": "Advanced Architectural Design",
                "archmag_restauro": "Heritage Conservation",
                "archmag_bim": "Building Information Modeling (BIM)"
            }
        },
        "logo": {
            "dummy": "/img/dummy.webp",
            "ing": "/img/ing.webp",
            "1st": "/img/1st.webp",
            "2nd": "/img/2nd.webp",
            "lib": "/img/lib.webp",
            "aer": "/img/aer.webp",
            "aut": "/img/aut.webp",
            "bio": "/img/bio.webp",
            "cin": "/img/cin.webp",
            "civ": "/img/civ.webp",
            "ele": "/img/ele.webp",
            "elt": "/img/elt.webp",
            "enr": "/img/enr.webp",
            "fis": "/img/fis.webp",
            "ges": "/img/ges.webp",
            "inf": "/img/inf.webp",
            "mat": "/img/mat.webp",
            "mech": "/img/mech.webp",
            "amb": "/img/amb.webp",
            "arch": "/img/arch.webp",
            "des": "/img/des.webp",
            
            "aermag": "/img/aermag.webp",
            "autmag": "/img/autmag.webp",
            "biomag": "/img/biomag.webp",
            "civmag": "/img/civmag.webp",
            "cybmag": "/img/cybmag.webp",
            "datmag": "/img/datmag.webp",
            "eltmag": "/img/eltmag.webp",
            "enrmag": "/img/enrmag.webp",
            "gesmag": "/img/gesmag.webp",
            "infmag": "/img/infmag.webp",
            "mechmag": "/img/mechmag.webp",
            "nfimag": "/img/nfimag.webp",
            "archmag": "/img/archmag.webp"
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

            "aut": "#dc2626",
            "aut-dark": "#991b1b",
            
            "bio": "#0d9488",
            "bio-dark": "#0f766e",
            
            "cin": "#db2777",
            "cin-dark": "#b5175f",

            "civ": "#d97706",
            "civ-dark": "#b45309",

            "ele": "#eab308",
            "ele-dark": "#ca8a04",
            
            "elt": "#ea580c",
            "elt-dark": "#c2410c",

            "enr": "#f97316",
            "enr-dark": "#c2410c",
            
            "fis": "#334155",
            "fis-dark": "#1e293b",

            "ges": "#854d0e",
            "ges-dark": "#653a0a",
            
            "inf": "#065f46",
            "inf-dark": "#044332",
            
            "mat": "#1e1b4b",
            "mat-dark": "#121033",
            
            "mech": "#c72fc7",
            "mech-dark": "#850e85",

            "amb": "#15803d",
            "amb-dark": "#166534",

            "arch": "#be123c",
            "arch-dark": "#9f1239",

            "des": "#a855f7",
            "des-dark": "#7e22ce",
            
            // MAGISTRALI COLORS
            "aermag": "#0369a1",
            "aermag-dark": "#075985",

            "autmag": "#b91c1c",
            "autmag-dark": "#7f1d1d",

            "biomag": "#115e59",
            "biomag-dark": "#0d4844",

            "civmag": "#b45309",
            "civmag-dark": "#78350f",

            "cybmag": "#0f172a",
            "cybmag-dark": "#020617",

            "datmag": "#2563eb",
            "datmag-dark": "#1e40af",
            
            "eltmag": "#6d28d9",
            "eltmag-dark": "#551a8b",
            
            "enrmag": "#b45309",
            "enrmag-dark": "#8c3f06",
            
            "gesmag": "#701a75",
            "gesmag-dark": "#521156",

            "infmag": "#047857",
            "infmag-dark": "#065f46",

            "mechmag": "#a21caf",
            "mechmag-dark": "#701a75",
            
            "nfimag": "#4c1d95",
            "nfimag-dark": "#36136b",

            "archmag": "#9f1239",
            "archmag-dark": "#881337"
        }
    }
}