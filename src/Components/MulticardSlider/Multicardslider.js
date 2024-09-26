import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Multicardslider.css';
import img1 from '../../Assets/quality.jpg'
import img2 from '../../Assets/sustainable.jpg'
import img3 from '../../Assets/thrivling-community.jpg'
import img4 from '../../Assets/thoughtful-design.jpg'
const Multicardslider = () => {
    const FishSlideApi = [
        {
            id: 1,
            img: img1,
            title: "QUALITY",
            desc: "Discover your dream home with unparalleled quality and attention to detail. Experience luxurious living in every space, designed to elevate your lifestyle.",
        },
        {
            id: 2,
            img: img2,
            title: "SUSTAINABILITY",
            desc: "Embrace eco-friendly living with homes designed for a sustainable future. Live in harmony with nature while enjoying modern comforts and efficiency.",
        },
        {
            id: 3,
            img: img3,
            title: "STRONG COMMUNITIES",
            desc: "Discover strong communities where connections flourish and homes thrive. Invest in real estate that fosters belonging and enhances your lifestyle.",
        },
        {
            id: 4,
            img: img4,
            title: "THOUGHTFUL DESIGN",
            desc: "We believe in empowering anyone with internet access and a computer to utilize our data for driving positive change in ocean conservation efforts.",
        },
    ];

    return (
        <div className='container'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                {FishSlideApi.map((card) => (
                    <SwiperSlide className="swiper_slide" key={card.id}>
                        <img src={card.img} alt="img1" />
                        <div className="slide-content">
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}

                <div className='swiper-button-prev slider-arrow'>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className='swiper-button-next slider-arrow'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </Swiper>
        </div>
    );
};

export default Multicardslider;
