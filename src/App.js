
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Navber from './Components/Pages/Navber';
import Tools from './Components/Pages/Tools';


function App() {
  return (
    <div >
      <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tools' element={<Tools></Tools>}></Route>
     </Routes>
     </div>
  );
}

export default App;
