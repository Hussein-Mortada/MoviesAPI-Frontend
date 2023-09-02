import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Slider() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadSlides();
    }, []);

    const loadSlides = async () => {
        const result = await axios.get("http://localhost:8080/api/movies/popular");
        setMovies(result.data);
    };


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.imdbId}>
                        <div className="slide-container">
                            <div className="left-half">
                                <h2>{movie.title}</h2>
                                <p>{movie.synopsis}</p>
                                <p>{movie.rating}</p>
                            </div>
                            <div className="right-half">
                                <img src={movie.img} alt={movie.title} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;