
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home';
import Navber from './Components/Pages/Navber';
import Tools from './Components/Pages/Tools';
import Login from "./Components/Pages/Login/Login";
import SignUp from './Components/Pages/Login/SignUp';
import ByuDetails from './Components/Pages/ByuDetails';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import AddReview from './Components/Pages/Dashboard/AddReview';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import AdminRequire from './Components/Pages/Login/AdminRequire';
import Payment from './Components/Pages/Dashboard/Payment';
import NotFound from './Components/Pages/NotFound/NotFound';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import MyProfile from './Components/Pages/Dashboard/MyProfile';


function App() {
  return (
    <div >
      <Navber></Navber>
      
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tools' element={
       <RequireAuth>
       <Tools></Tools>
       </RequireAuth>
       }></Route>
       <Route path='/tools/:Id' element={
         <RequireAuth>
           <ByuDetails></ByuDetails>
         </RequireAuth>
       }></Route>
       <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
       }>
         <Route index element={<MyOrder></MyOrder>}></Route>
         <Route path='addreview' element={<AddReview></AddReview>}></Route>
         <Route path='payment/:id' element={<Payment></Payment>}></Route>
         <Route path='allusers' element={<AdminRequire><AllUsers></AllUsers></AdminRequire>}></Route>
         <Route path='myprofile' element={<AdminRequire><MyProfile></MyProfile></AdminRequire>}></Route>
       </Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>

       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
     </div>
  );
}

export default App;
