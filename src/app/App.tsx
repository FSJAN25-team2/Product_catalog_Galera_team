import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"
import { BackToTop } from "../components/BackToTop/BackToTop"

function App() {

  return (
    <>
      <NavBar />

      <Outlet />
      
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
