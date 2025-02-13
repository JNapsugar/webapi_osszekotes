import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ScaleLoader } from "react-spinners";

export const TipusSingle = () => {
    const { tipusId } = useParams();
    const [tipus, setTipus] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setPending(true);
            try {
                const valasz = await axios.get(`https://localhost:5001/api/Tipusok/${tipusId}`)
                setTipus(valasz.data);
            }
            catch (hiba) {
                console.log(hiba);
            }
            finally {
                setPending(false);
            };    
    };
    fetchData();
    }, [tipusId]);

    return (
        <div className="single-container">
            {isPending || !tipus ? (
                <ScaleLoader color="#7D3C98" size={50} />
            ) : (
                <div className="single-card">
                    <h3 className="single-title">{tipus.megnevezes}</h3>
                    <img src={tipus.kepek} alt={tipus.megnevezes} className="single-image" />
                    <p className="single-description">{tipus.leiras}</p>
                    <Link to="/" className="back-button">Vissza</Link>
                </div>
            )}
        </div>
    );
}