import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UploadPanel.css';
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export function UploadPanel() {
    const navigator = useNavigate();

    return (
        <article className="upload-panel">
            <h2>Condividi i tuoi appunti <br /> per aiutare altri studenti</h2>
            <div>
                <button className="upload-btn" onClick={() => {navigator('/upload')}}>
                    <FontAwesomeIcon icon={faUpload} />
                    Carica Appunti
                </button>
            </div>
        </article>
    );
}
