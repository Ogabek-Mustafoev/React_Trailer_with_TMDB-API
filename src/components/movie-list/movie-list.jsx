import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MovieCard } from "../";
import tmdbApi, { category } from "../../api/tmdb-api";
import "swiper/css";
import "./movie-list.scss";

export default function MovieList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    }
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
