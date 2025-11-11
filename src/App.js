import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from 'axios';
import Cake from './Pages/Cake';
import Flowers from './Pages/Flowers';
import Icecream from './Pages/Icecream';
import Birthday from './Pages/Cake';
import Viewcart from './Pages/Viewcart';
import Chocolate from './Pages/Chocolate';
import Sna from './Component/Sna';
import Signup from './Pages/Signup';
import Users from './Pages/Users';
function App() {

  let p1 =['Cakes','Flowers','IceCreams','BirthdayCakes','Chocolates'];
  return (
    
    
    <div className="App">
     <BrowserRouter>
     <Sna pages={p1}></Sna>
  <Routes>
  <Route path='Cakes'element={<Cake/>}/>
  <Route path='Flowers'element={<Flowers/>}/>
  <Route path='BirthdayCakes'element={<Birthday/>}/>
  <Route path='IceCreams'element={<Icecream/>}/>
  <Route path='Chocolates'element={<Chocolate/>}/>
  {/* <Route path='/cart' element={<Viewcart/>}/> */}
  <Route path='/' element={<Chocolate/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Users'element={<Users/>}/>
  </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
