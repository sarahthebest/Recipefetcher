import { Routes, Route } from "react-router-dom"
import Recipes from "./Recipes"
import Home from "./Home"

const AppRouter = () => {
  return (
    <div className="routes-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
      </Routes>
    </div>
  )
}
export default AppRouter