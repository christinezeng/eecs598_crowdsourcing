import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import LabelPage from "./pages/LabelPage";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path = "/" element={<StartPage/>}/>
          <Route path = "/label" element={<LabelPage/>}/>
        </Routes>
    </>
  )
}

export default App
