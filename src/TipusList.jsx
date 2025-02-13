import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ScaleLoader } from "react-spinners";
import './style.css';

export const TipusList = () => {
    const [tipuses, setTipuses] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get('https://localhost:5001/api/Tipusok')
        .then(valasz => setTipuses(valasz.data))
        .catch(hiba => console.log(hiba))
        .finally(() => setPending(false));
    }, []);

    return (
        <div className="container">
            {isPending ? (
                <ScaleLoader color="#007BFF" size={50} />
            ) : (
                <div className="grid-container">
                    {tipuses.map((tipus, index) => (
                        <div className="card" key={index}>
                            <img src={tipus.kepek} alt={tipus.megnevezes} className="image" />
                            <h3 className="card-title">{tipus.megnevezes}</h3>
                            <p className="card-description">Leírás: {tipus.leiras}</p>
                            <Link to={"/tipus/" + tipus.id} className="button">Részletek</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};