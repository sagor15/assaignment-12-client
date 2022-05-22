
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home';
import Navber from './Components/Pages/Navber';
import Tools from './Components/Pages/Tools';
import Login from "./Components/Pages/Login/Login";
import SignUp from './Components/Pages/Login/SignUp';


function App() {
  return (
    <div >
      <Navber></Navber>
      
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tools' element={<Tools></Tools>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>

     </Routes>
     
     </div>
  );
}

export default App;
