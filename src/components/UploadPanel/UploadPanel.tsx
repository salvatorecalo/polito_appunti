import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPanel.css';
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export function UploadPanel() {
    const handleClick = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <article className="upload-panel">
            <h2>Condividi i tuoi appunti <br /> per aiutare altri studenti</h2>
            <input type="file" id="fileInput" />
            <div>
                <button className="upload-btn" onClick={handleClick}>
                    <FontAwesomeIcon icon={faUpload} />
                    Carica Appunti
                </button>
            </div>
        </article>
    );
}
