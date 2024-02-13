import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./Pages/Accueil"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Accueil/>} path="/" />
      </Routes>
    </BrowserRouter>
  )
}
export default App