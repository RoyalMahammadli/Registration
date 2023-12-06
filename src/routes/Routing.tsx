import { Route, Routes } from "react-router-dom"
import Index from "../pages/index/Index"
import Mainİnformation from "../pages/əsas məlumatlar/Mainİnformation"
import Orderİnformation from "../pages/əmr məlumatlar/Orderİnformation"

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mainInfo" element={<Mainİnformation />} />
        <Route path="/orderInfo" element={<Orderİnformation />} />
      </Routes>

    </div>
  )
}

export default Routing