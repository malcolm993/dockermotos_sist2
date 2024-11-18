import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function UpdateMoto() {
    const [patente, setPatente] = useState('');
    const [moto, setMoto] = useState({ marca: '', cilindrada: '', multa: '' });

    const handleUpdate = async () => {
        await fetch(API_ROUTES.UPDATE_MOTO(patente), {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' ,
                "ngrok-skip-browser-warning": 'true'
            },
            body: JSON.stringify(moto),
        });
    };

    return (
        <div>
            <h2>Actualizar Moto</h2>
            <input type="text" placeholder="PATENTE" onChange={(e) => setPatente(e.target.value)} />
            <input type="text" placeholder="Marca" onChange={(e) => setMoto({ ...moto, marca: e.target.value })} />
            <input type="text" placeholder="Cilindrada" onChange={(e) => setMoto({ ...moto, cilindrada: e.target.value })} />
            <input type="number" placeholder="Multa" onChange={(e) => setMoto({ ...moto, multa: e.target.value })} />
            <button onClick={handleUpdate}>Actualizar</button>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default UpdateMoto;
