import { useContext, useEffect } from 'react';
import tmdbApi, { movieType } from '../../api/tmdb-api';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { HeroSlideItem, TrailerModal } from '../';
import { Context } from '../../context';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './hero-slide.scss';

export default function HeroSlide() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: 'SET_LOADER', payload: true });
    const getMovies = () => {
      const params = { page: 1 };
      try {
        tmdbApi.getMoviesList(movieType.popular, { params })
          .then(({ results }) => {
            dispatch({ type: 'SET_HERO_ITEMS', payload: results.slice(0, 7) });
            setTimeout(() => dispatch({ type: 'SET_LOADER', payload: false }), 1500);
          })
      } catch (error) {
        console.log('error: ' + error);
      }
    }
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          state.heroItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {state.heroItems.map((item, idx) => <TrailerModal key={idx} item={item} />)}
    </div>
  )
}