import Image from "next/image"

export function NoDocumentsSection() {
    return (
        <section className="no-documents-section">
            <Image 
                src="/no_documents.png"
                alt="No documents found"
                width={200}
                loading="eager"
                height={200}
            />
            <p>Nessun documento trovato</p>
        </section>
    )
}