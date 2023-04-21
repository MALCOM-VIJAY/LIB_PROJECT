import './App.css'
import React,{useState} from 'react'
import Landpage from './Landpage';
import Books from './Books';
import Preloader from './Preloader';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
//Main routing page
function App() {
  return(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route path='/library' element={<Books/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;
