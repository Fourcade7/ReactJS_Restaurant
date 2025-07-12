
import "./pr.css"

import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { HomeScreen } from "./home/homeScreen"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} />
      

      </Routes>
    </BrowserRouter>
  )
}

export default App
