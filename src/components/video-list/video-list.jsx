import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdb-api";
import { VideoCard } from "../";
import './video-list.scss';
import { Context } from "../../context";

export default function VideoList({ id }) {
  const { state, dispatch } = useContext(Context);
  const { category } = useParams();

  useEffect(() => {
    const getVideos = () => {
      tmdbApi
        .getVideos(category, id)
        .then(({ results }) => {
          const payload = results.length > 6 ? results.slice(0, 6) : results;
          dispatch({ type: 'SET_VIDEOS', payload });
        })
    }
    getVideos();
  }, [category, dispatch, id]);

  return (
    <div className="video-card">
      {state.videos.map((item, idx) => (
        <VideoCard key={idx} item={item} />
      ))}
    </div>
  )
}
