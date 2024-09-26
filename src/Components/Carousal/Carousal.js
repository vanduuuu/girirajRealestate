import React, { useEffect, useState } from 'react';
import vdo1 from '../../Assets/c1.mp4';
import vdo2 from '../../Assets/c2.mp4';
import vdo3 from '../../Assets/c3.mp4';
import './Carousal.css'; // Make sure to import your CSS

const Carousal = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = () => {
      const videoData = [
        {
          id: 1,
          title: "Experience That Elevates",
          description: "With over 35 years of industry expertise, Giriraj Properties sets the standard for excellence. Our multilingual team connects your property with a world of buyers, ensuring maximum visibility and results.",
          url: vdo1
        },
        {
          id: 2,
          title: "Your Goals, Our Mission",
          description: "Enjoy personalized service with flexible open homes and inspections tailored to your schedule. We prioritize your needs and negotiate fiercely to secure the best deal for you, treating every client like family.",
          url: vdo2
        },
        {
          id: 3,
          title: "Empowered by Vision & Values",
          description: "Striving to be the #1 real estate team in Golden Triangle-South Mumbai, we embody progress, service, and legacy. Experience integrity and dedication that transforms your real estate journey into a remarkable success story.",
          url: vdo3
        }
      ];
      setVideos(videoData);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {videos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={video.id}>
              <div className="video-container">
                <video autoPlay loop muted>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h1 className='h1title text-white mb-4'>{video.title}</h1>
                <p className='greypara text-white'>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
