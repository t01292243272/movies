import React, { useEffect, useState } from "react";

import './trending-movie.scss'

import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import { movieType, category, getMovieType } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

const TrendingMovie = props => {

    SwiperCore.use([Autoplay])

    const [items, setItems] = useState([])

    useEffect(() => {
        trendingMovie()
    }, [])

    const trendingMovie = async () => {
        let res = await getMovieType(movieType.popular)
        if (res && res.data) {
            setItems(res.data.results)
        }
        // console.log("Check res: ", res)
    }

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={1}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide className="slide-movie" key={index}>
                            <MovieCard category={category.movie} item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >

        </div >
    )
}

export default TrendingMovie