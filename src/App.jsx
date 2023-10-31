import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"
import {Route, Routes} from "react-router-dom"
import Facts from "./components/pages/Facts"
import Artists from "./components/pages/Artists"

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/artists" element={<Artists />} />
    <Route path="/facts" element={<Facts />} />
   </Routes>
   <MainContent />
   <Footer/>
   
    </div>
  )
}

export default App
