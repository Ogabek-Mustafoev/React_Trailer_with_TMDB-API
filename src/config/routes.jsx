import { Route, Routes } from "react-router-dom";
import { MovieDetail, NotFound } from "../components";
import { Catalog, Home } from "../pages";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<MovieDetail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
