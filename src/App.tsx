import { useLocation } from "react-router-dom"
import MyAntDrawer from "./components/antdesignDrawer/MyAntDrawer"
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname == '/' && <MyAntDrawer />}
      {location.pathname !== '/' && <Dashboard />}
    </>
  )
}

export default App
