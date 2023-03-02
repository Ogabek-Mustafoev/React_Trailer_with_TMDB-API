import { Link } from 'react-router-dom';
import apiConfig from '../../api/api-config';
import { category } from '../../api/tmdb-api';
import { Button } from '../';
import './movie-card.scss';

export default function MovieCard(props) {
  const item = props.item;
  const link = '/' + category[props.category] + '/' + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const setTitle = (title) => {
    if (title.length > 18) {
      return `${title.slice(0, 18)}...`;
    } return title;
  }

  return (
    <Link to={link}>
      <div className='movie-card' data-aos='fade-up' data-aos-delay={`${Math.floor(Math.random() * 10)}00`} >
        <img src={bg} alt={setTitle(item.title || item.name)} />
        <Button>
          <i className="fas fa-play"></i>
        </Button>
      </div>
      <h3 className='movie-title'>{setTitle(item.title || item.name)}</h3>
    </Link>
  )
}
