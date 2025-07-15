
import "./pr.css"

import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { HomeScreen } from "./home/homeScreen"
import { OrderScreen } from "./orderScreen/orderScreen"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} />
        <Route path="/order" element={<OrderScreen></OrderScreen>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
