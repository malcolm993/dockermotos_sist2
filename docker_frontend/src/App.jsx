import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateMoto from './components/CreateMoto';
import ViewMotos from './components/ViewMoto';
import FindMoto from './components/FindMoto';
import UpdateMoto from './components/UpdateMoto';
import DeleteMoto from './components/DeleteMoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMoto />} />
        <Route path="/view" element={<ViewMotos />} />
        <Route path="/find" element={<FindMoto />} />
        <Route path="/update" element={<UpdateMoto />} />
        <Route path="/delete" element={<DeleteMoto />} />
      </Routes>
    </Router>
  );
}

export default App;
