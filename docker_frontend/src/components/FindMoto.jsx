import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../routes';

function FindMoto() {
    const [patente, setPatente] = useState('');
    const [moto, setMoto] = useState(null);

    const handleSearch = async () => {
        //const response = await fetch(API_ROUTES.FIND_MOTO(patente));
        const response = await fetch(API_ROUTES.FIND_MOTO(patente),{ 
        headers :{"ngrok-skip-browser-warning": 'true'}});

        const data = await response.json();
        setMoto(data);
    };

    return (
        <div>
            <h2>Buscar Moto</h2>
            <input type="text" placeholder="PATENTE" onChange={(e) => setPatente(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {moto && <div>{moto.marca} {moto.cilindrada} - {moto.multa}</div>}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default FindMoto;
