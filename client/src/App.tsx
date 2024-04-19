import { Routes , Route } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import Createnote from "./Createnote"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create-note" element={<Createnote/>}/>
    </Routes>
    </>
  )
}

export default App
