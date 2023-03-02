import { useContext, useEffect } from 'react';
import round from '../../assets/round.webp';
import film from '../../assets/camera.webp';
import { Context } from '../../context';
import './loader.scss';

export default function Loader() {
  const { state } = useContext(Context);

  useEffect(() => {
    if (state.loader) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [state.loader]);

  return (
    <div style={{ display: state.loader ? 'block' : 'none' }}>
      <div className='loader-wrapper'>
        <div className="loader">
          <div className="loader__container">
            <div className="loader__film">
              <img data-aos-delay='400' data-aos='fade-left' className="loader__film_img" src={round} alt="O" />
              <img data-aos-delay='600' data-aos='fade-right' className="loader__film_img" src={round} alt="O" />
            </div>
            <img data-aos='fade-up' className="loader__camera" src={film} alt="D" />
          </div>
          <h4 data-aos='zoom-out'>Loading...</h4>
        </div>
      </div>
    </div>
  )
}
