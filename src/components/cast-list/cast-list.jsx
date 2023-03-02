import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/api-config";
import tmdbApi from "../../api/tmdb-api";
import { Context } from "../../context";
import './cast-list.scss';

export default function CastList({ id }) {
  const { state, dispatch } = useContext(Context);
  const { category } = useParams();

  useEffect(() => {
    const getCredits = () => {
      tmdbApi
        .credits(category, id)
        .then(({ cast }) => {
          const payload = cast.length > 5 ? cast.slice(0, 5) : cast;
          dispatch({ type: 'SET_ACTORS', payload })
        });
    }
    getCredits();
  }, [category, dispatch, id]);

  return (
    <div className="casts">
      {state.actors.map((item, idx) => {
        if (!apiConfig.w500Image(item.profile_path).includes(null)) {
          return (
            (
              <div className="casts__item" key={idx}>
                <div
                  data-aos='fade-left'
                  data-aos-delay={`${idx + 1}00`}
                  className="casts__item__img"
                  style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
                />
                <p data-aos='fade-up'
                  data-aos-delay={`${idx + 4}000`}
                  className="casts__item__name">{item.name}</p>
              </div>
            )
          )
        } return null;
      })}
    </div>
  )
}
