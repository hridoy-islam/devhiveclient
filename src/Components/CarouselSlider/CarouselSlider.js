import React from 'react';
import img1 from '../../image/river-mountain-scenery-wallpaper-1440x900_4.jpg'
import img2 from '../../image/sunset-minimalist-art-wallpaper-1920x1280_38.jpg'
import img3 from '../../image/river-mountain-scenery-wallpaper-1440x900_4.jpg'
import img4 from '../../image/sunset-minimalist-art-wallpaper-1920x1280_38.jpg'
import BannerItem from './BannerItem/BannerItem';
import './CarouselSlider.css'

const CarouselSlider = () => {
    const sliders = [
        {
            image: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 1
        },
    ]
    return (
        <div>
            <div className="carousel w-full my-10">

                {
                    sliders.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default CarouselSlider;