import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function DeleteMoto() {
    const [patente, setPatente] = useState('');

    const handleDelete = async () => {
        await fetch(API_ROUTES.DELETE_MOTO(patente),{ 
            method: 'DELETE' , 
            headers :{"ngrok-skip-browser-warning": 'true'}
        } );
    };

    return (
        <div>
            <h2>Eliminar Moto</h2>
            <input type="text" placeholder="PATENTE" onChange={(e) => setPatente(e.target.value)} />
            <button onClick={handleDelete}>Eliminar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default DeleteMoto;
