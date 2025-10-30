import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
   
     {/* <Form/> */}
     <Navbar/>

     {/* <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          
          <Route path="/form" element={ } />
          <Route path="/brands" element={} />
        </Routes>
      </div>
    </Router> */}
    </>
  )
}

export default App
