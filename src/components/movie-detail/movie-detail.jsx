import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/api-config";
import tmdbApi from "../../api/tmdb-api";
import { CastList, MovieList, VideoList } from "../";
import { Context } from "../../context";
import './movie-detail.scss';

export default function MovieDetail() {
  const { state, dispatch } = useContext(Context);
  const { category, id } = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADER', payload: true });
    const getDetail = () => {
      tmdbApi.detail(category, id, { params: {} }).then(res => {
        dispatch({ type: 'SET_MOVIE_DETAILS', payload: res });
        setTimeout(() => dispatch({ type: 'SET_LOADER', payload: false }), 1500)
      })
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, dispatch, id]);

  return (
    <>
      {state.movieDetails && (
        <>
          <div
            className="banner"
            data-aos='zoom-out'
            data-aos-delay='900'
            data-aos-duration='3000'
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                state.movieDetails.backdrop_path || state.movieDetails.poster_path
              )})`,
            }}
          />
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                data-aos='zoom-in-right'
                data-aos-delay='1000'
                data-aos-duration='1000'
                className="movie-content__poster_img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    state.movieDetails.poster_path || state.movieDetails.backdrop_path
                  )})`
                }} />
            </div>
            <div className="movie-content__info">
              <h1 data-aos='fade-down' data-aos-delay='300' className="title">{state.movieDetails.title || state.movieDetails.name}</h1>
              <div className="genres">
                {state.movieDetails.genres && state.movieDetails.genres.slice(0, 5).map((genre, idx) => (
                  <span data-aos='flip-left' data-aos-delay={`${idx + 1}00`} key={idx} className="genres__item">#{genre.name}</span>
                ))}
              </div>
              <p data-aos='fade-left' data-aos-delay='500' className="overview">{state.movieDetails.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2 data-aos='fade-left' data-aos-delay='700'>Actors & Actresses</h2>
                </div>
                <CastList id={state.movieDetails.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={state.movieDetails.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 data-aos='fade-right' data-aos-delay='700'>Similar Movies</h2>
              </div>
              <MovieList category={category} type="similar" id={state.movieDetails.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
