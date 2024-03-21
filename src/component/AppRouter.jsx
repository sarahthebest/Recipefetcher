import { Routes, Route } from "react-router-dom"
import Categories from "./Categories"
import Home from "./Home"
import SearchPage from "./SearchPage"
import RecipePage from "./RecipePage"

const AppRouter = () => {
  return (
    <div className="routes-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/RecipePage" element={<RecipePage />} />
      </Routes>
    </div>
  )
}
export default AppRouter