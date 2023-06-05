import  {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu styles/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobremim" element={<SobreMim/>} />
        <Route path="*" element={<div>Página não encontrada </div>} />
      </Routes>
    </BrowserRouter>
    </div>     
   
  );
  

}

