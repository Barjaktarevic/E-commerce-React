import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// components
import Navbar from "./components/Navbar"
import Home from "./Home"
import Products from "./Products"
import Cart from "./Cart"
import ApiContext from "./utils/ApiContext"

function App() {
  return (
    <ApiContext>
    <div className="bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 w-screen h-screen overflow-hidden">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/products" element={ <Products /> } />
          <Route path="/cart" element={ <Cart /> }/>
        </Routes>
      </BrowserRouter>
    </div>
    </ApiContext>
  )
}

export default App
