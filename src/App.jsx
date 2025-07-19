
import "./pr.css"

import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { HomeScreen } from "./home/homeScreen"
import { OrderScreen } from "./orderScreen/orderScreen"
import { LoginScreen } from "./auth/loginScreen"
import { HistoryScreen } from "./history/historyScreen"
import { WereHouseScreen } from "./wereHouseScreen/wereHouseScreen"
import { ChefScreen } from "./chefScreen/shefScreen"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen></LoginScreen>} />
        <Route path="/home" element={<HomeScreen></HomeScreen>} />
        <Route path="/order" element={<OrderScreen></OrderScreen>} />
        <Route path="/history" element={<HistoryScreen></HistoryScreen>} />
        <Route path="/werehouse" element={<WereHouseScreen></WereHouseScreen>} />
        <Route path="/cheff" element={<ChefScreen></ChefScreen>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
