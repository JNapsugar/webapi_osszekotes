import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export const TipusCreate = () => {
    const navigate = useNavigate();
    
    return (
        <div className="create-container">
            <h2 className="create-title">Új típus felvétele</h2>
            <form
                className="create-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = {
                        kepek: event.target.kepek.value,
                        megnevezes: event.target.megnevezes.value,
                        leiras: event.target.leiras.value,
                    };
                    axios.post("https://localhost:5001/api/Tipusok", formData, {
                        headers: { 'Content-Type': 'application/json' },
                    })
                    .then(() => navigate("/"))
                    .catch((error) => console.error("Hiba történt:", error));
                }}
            >
                <div className="form-group">
                    <label>Képek:</label>
                    <input type="text" name="kepek" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Megnevezés:</label>
                    <input type="text" name="megnevezes" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Leírás:</label>
                    <input type="text" name="leiras" className="form-control" />
                </div>
                <button type="submit" className="submit-button">Felvitel</button>
            </form>
        </div>
    );
};