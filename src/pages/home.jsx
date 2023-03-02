import { useEffect } from "react";
import { Link } from "react-router-dom";
import { category, movieType, tvType } from "../api/tmdb-api";
import { HeroSlide, MovieList, OutlineButton } from "../components";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section">
          <div className="section__header">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className={"small"}>View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section">
          <div className="section__header">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className={"small"}>View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section">
          <div className="section__header">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className={"small"}>View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section">
          <div className="section__header">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className={"small"}>View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
}
