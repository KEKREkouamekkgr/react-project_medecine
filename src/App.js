import Accueil from './components/views/Accueil';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import Contenu from'./components/views/Contenu';
import Suivant from'./components/views/Suivant';

function App() {
  return (
   
    <div className="App">
     <Routes>
              <Route path="/react-project_medecine" element={<Accueil />} />
              <Route path="/contenu" element={<Contenu />} />
              <Route path="/suivant" element={<Suivant />} />
     </Routes>
     </div>
    
  );
}

export default App;
