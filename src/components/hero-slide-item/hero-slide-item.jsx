import React from 'react'
import apiConfig from '../../api/api-config';
import { Button, OutlineButton } from '../';
import tmdbApi, { category } from '../../api/tmdb-api';
import { useNavigate } from 'react-router-dom';

export default function HeroSlideItem({ item, className }) {
  const navigate = useNavigate();
  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
    } else {
      modal.querySelector('.modal__content').innnerHTML = 'No Trailer!';
    }
    modal.classList.toggle('active');
  }

  const setLength = items => {
    if (items.length > 300) {
      return `${items.slice(0, 300)}...`;
    } return items;
  }

  return (
    <div className={`hero-slide__item ${className}`} style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-slide__item-content container">
        <div className="hero-slide__item-content_info">
          <h3 className="title">{item.title}</h3>
          <div className="overview">{setLength(item.overview)}</div>
          <div className="btns">
            <Button onClick={() => { navigate(`/movie/${item.id}`) }}>
              Wath now!
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer!
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item-content_poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt={item?.original_title} />
        </div>
      </div>
    </div>
  )
}
