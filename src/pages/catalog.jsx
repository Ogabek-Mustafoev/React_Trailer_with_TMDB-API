import { useParams } from "react-router-dom"
import { MovieGrid, PageHeader } from "../components";
import { category as cat } from "../api/tmdb-api";

export default function Catalog() {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cat.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}
