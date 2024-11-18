import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>CRUD de Motos</h1>
            <ul>
                <li><Link to="/create">Ingresar moto </Link></li>
                <li><Link to="/view">Ver Todos las  Motos</Link></li>
                <li><Link to="/find">Buscar Moto</Link></li>
                <li><Link to="/update">Actualizar Moto</Link></li>
                <li><Link to="/delete">Eliminar Moto</Link></li>
            </ul>
        </div>
    );
}

export default Home;
