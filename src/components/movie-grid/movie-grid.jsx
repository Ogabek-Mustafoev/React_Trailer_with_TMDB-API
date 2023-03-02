import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { movieType, tvType, category } from '../../api/tmdb-api';
import { MovieCard, OutlineButton } from '../';
import { SearchMovie } from '../';
import { Context } from '../../context';
import './movie-grid.scss';

export default function MovieGrid(props) {
  const { dispatch } = useContext(Context);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  const getList = async (loadmore) => {
    let response = null;
    if (keyword === undefined) {
      let params = {};
      if (loadmore) {
        params = { page: page + 1 };
      }
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
      }
    } else {
      let params = {
        query: keyword
      }
      if (loadmore) {
        params = { ...params, page: page + 1 };
      }
      response = await tmdbApi.search(props.category, { params });
    }
    if (loadmore) {
      setItems([...items, ...response.results]);
      setPage(page + 1);
    } else {
      setItems(response.results);
      setTotalPage(response.total_pages);
    }
    setTimeout(() => dispatch({ type: 'SET_LOADER', payload: false }), 1500);
  }

  const loadMore = async () => getList('loadmore');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: 'SET_LOADER', payload: true });
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category, keyword]);

  return (
    <>
      <div className="section mb-3">
        <SearchMovie category={props.category} keyword={keyword} />
      </div>
      <div className='movie-grid'>
        {items.map((item, idx) => <MovieCard category={props.category} item={item} key={idx} />)}
      </div>
      {page < totalPage && (
        <div className="movie-grid__loadmore">
          <OutlineButton className='small' onClick={loadMore} >Load more</OutlineButton>
        </div>
      )}
    </>
  )
}

// const getList = async (loadmore) => {
//   let response = null;
//   if (keyword === undefined) {
//     let params = {};
//     if (loadmore) {
//       params = { page: page + 1 };
//     }
//     switch (props.category) {
//       case category.movie:
//         response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
//         break;
//       default:
//         response = await tmdbApi.getTvList(tvType.popular, { params });
//         break;
//     }
//   } else {
//     let params = {
//       query: keyword
//     }
//     if (loadmore) {
//       params = { ...params, page: page + 1 };
//     }
//     response = await tmdbApi.search(props.category, { params });
//   }
//   if (loadmore) {
//     setItems([...items, ...response.results]);
//     setPage(page + 1);
//   } else {
//     setItems(response.results);
//     setTotalPage(response.total_pages);
//   }
// }