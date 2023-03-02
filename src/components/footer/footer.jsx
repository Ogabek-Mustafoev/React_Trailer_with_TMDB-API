import logo from '../../assets/tmovie.png';
import bg from '../../assets/footer-bg.jpg';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content_logo">
          <div data-aos='zoom-out' data-aos-delay='700' data-aos-duration='1000' className="logo">
            <img src={logo} alt="Logo" />
            <Link to='/'>TRAILER</Link>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <h3 data-aos='fade-right' data-aos-delay='100' data-aos-duration='1000'> TRAILER <i className="far fa-play-circle"></i></h3>
            <p data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000'>This website is made in React JS. If you liked, let's talk about project 👇</p>
            <div className="share">
              <a data-aos='fade-right' data-aos-delay='400' href="https://www.facebook.com/ogabek.mustafoyev.54/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-f"></i></a>
              <a data-aos='fade-right' data-aos-delay='600' href="/#" ><i className="fab fa-twitter"></i></a>
              <a data-aos='fade-right' data-aos-delay='800' href="https://t.me/Ogabek_Mustafoyev" target="_blank" rel="noopener noreferrer" ><i className="fab fa-telegram"></i></a>
              <a data-aos='fade-right' data-aos-delay='1000' href="/#" ><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="box">
            <h3 data-aos-offset="0" data-aos='fade-up' data-aos-delay='0' data-aos-duration='1000'> Contact Info <i className="fas fa-info-circle"></i></h3>
            <a data-aos='fade-up' data-aos-delay='200' href="tel:+998883521214" className="links"><i className="fas fa-phone"></i> +998 (88) 352-12-14</a>
            <a data-aos='fade-up' data-aos-delay='400' href="mailto:mustafoev0806@gmail.com" className="links"><i className="fas fa-envelope"></i> mustafoev0806@gmail.com</a>
            <a data-aos='fade-up' data-aos-delay='600' href="https://www.google.com/maps/place/Samarkand,+Uzbekistan/@39.6402225,66.6382411,10z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731" target="_blank" rel="noopener noreferrer" className="links"><i className="fas fa-map-marked-alt"></i> Samarkand, Uzbekistan</a>
          </div>
          <div className="box">
            <h3 data-aos-offset="0" data-aos='fade-left' data-aos-delay='0' data-aos-duration='1000'> Quick Links <i className="fas fa-link"></i></h3>
            <Link data-aos='fade-left' data-aos-delay='200' to="/" className="links"><i className="fas fa-arrow-right"></i> home</Link>
            <Link data-aos='fade-left' data-aos-delay='400' to="/movie" className="links"><i className="fas fa-arrow-right"></i> Movies</Link>
            <Link data-aos='fade-left' data-aos-delay='600' to="/tv" className="links"><i className="fas fa-arrow-right"></i> TV Series</Link>
            <a data-aos='fade-left' data-aos-delay='800' href="/" className="links"><i className="fas fa-redo-alt"></i> Refresh</a>
          </div>
        </div>
        <div data-aos='zoom-out' data-aos-delay='1000' data-aos-duration='1200' className="credit"> Created by mr. <span> | BekDev | </span>©️ All rights reserved! </div>
      </div>
    </div>
  )
}