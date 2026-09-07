import { Route, Router, Routes } from "react-router-dom"

import Home from "./Home"
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/Footer"


function App() {
 

  return (
   <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
   </>
  )
}

export default App
