import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdb-api";
import { OutlineButton } from "../";
import './search-movie.scss';

export default function SearchMovie(props) {
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
  const navigate = useNavigate();
  const inputRef = useRef();

  const goToSearch = useCallback(() => {
    inputRef.current.blur();
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, navigate, props.category]);

  const enterEvent = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      goToSearch();
    }
  }

  return (
    <div className="movie-search">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={enterEvent}
      />
      <OutlineButton className="small" onClick={goToSearch}>
        Search
      </OutlineButton>
    </div>
  )
}
