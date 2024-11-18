import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function ViewMotos() {
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        fetch(API_ROUTES.GET_ALL_MOTOS,{ 
            headers :{"ngrok-skip-browser-warning": 'true'}})
            .then((res) => res.json())
            .then((data) => setMotos(data));

    }, []);

    return (
        <div>
            <h2>Motos Registradas</h2>
            <ul>
                {motos.map((moto) => (
                    <li key={moto.patente}>{moto.marca} {moto.cilindrada} - {moto.multa}</li>
                ))}
            </ul>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default ViewMotos;
