    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { API_ROUTES } from '../routes';

    function CreateMoto() {
        const [moto, setMoto] = useState({ patente: '', marca: '', cilindrada: '', multa: '' });

        const handleSubmit = async (e) => {
            e.preventDefault();
            await fetch(API_ROUTES.CREATE_MOTO,{ 
                headers :{"ngrok-skip-browser-warning": 'true'}}, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(moto),
            });
        };

        return (
            <div>
                <h2>Crear Moto en registro</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="PATENTE" onChange={(e) => setMoto({ ...moto, patente: e.target.value })} />
                    <input type="text" placeholder="marca" onChange={(e) => setMoto({ ...moto, marca: e.target.value })} />
                    <input type="text" placeholder="cilindrada" onChange={(e) => setMoto({ ...moto, cilindrada: e.target.value })} />
                    <input type="number" placeholder="multa" onChange={(e) => setMoto({ ...moto, multa: e.target.value })} />
                    <button type="submit">Crear</button>
                </form>
                <Link to="/">Volver al Inicio</Link>
            </div>
        );
    }

    export default CreateMoto;
