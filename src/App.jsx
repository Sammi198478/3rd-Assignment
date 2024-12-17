import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MyNavbar from './components/Navbar'

import Footer from './components/Footer'
import Home from './components/HomePage/index'
import Restaurants from "./components/Restaurants";
import BellaITalia from "./components/BellaitaliaPage/BellaITalia";


function App() {

  

  return (
    <>
     < BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/restaurants' element={< Restaurants/>}></Route>
          <Route path="/bellaitalia" element={<BellaITalia/>}></Route>
          
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;
