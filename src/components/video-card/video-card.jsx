import { useEffect, useRef } from "react";
import './video-card.scss';

export default function VideoCard({ item }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, [])

  return (
    <div data-aos='zoom-in-up' data-aos-delay={`${Math.floor(Math.random() * 10)}00`} className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        ref={iframeRef}
        width="100%"
        src={`https://www.youtube.com/embed/${item.key}`}
        title={item.name || 'video'}
        height='100%'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}
