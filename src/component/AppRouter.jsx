import { Routes, Route } from "react-router-dom"
import Recipes from "./Categories"
import Home from "./Home"

const AppRouter = () => {
  return (
    <div className="routes-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Recipes />} />
      </Routes>
    </div>
  )
}
export default AppRouter