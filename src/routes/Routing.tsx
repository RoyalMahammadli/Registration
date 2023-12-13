import { Route, Routes } from "react-router-dom"
import ElektronForma from "../pages/ElektronForma"
import Index from "../pages/index/Index"
import Paylanacaqlar from "../pages/paylanacaqlar/Paylanacaqlar"
import Orderİnformation from "../pages/əmr məlumatlar/Orderİnformation"
import Mainİnformation from "../pages/əsas məlumatlar/Mainİnformation"

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mainInfo" element={<Mainİnformation />} />
        <Route path="/orderInfo" element={<Orderİnformation />} />
        <Route path="/form" element={<ElektronForma />} />
        <Route path="/list" element={<Paylanacaqlar />} />
      </Routes>

    </div>
  )
}

export default Routing