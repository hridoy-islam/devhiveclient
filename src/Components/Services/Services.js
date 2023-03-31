import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide_image_1 from '../../image/service-image/pexels-1.jpg'
import slide_image_2 from '../../image/service-image/pexels-2.jpg'
import slide_image_3 from '../../image/service-image/pexels-3.jpg'
import slide_image_4 from '../../image/service-image/pexels-4.jpg'
import slide_image_5 from '../../image/service-image/pexels-5.jpg'
import slide_image_6 from '../../image/service-image/pexels-6.jpg'
import slide_image_7 from '../../image/service-image/pexels-7.jpg'
import slide_image_8 from '../../image/service-image/pexels-8.jpg'


const Services = () => {
    return (
        <div className='px-20'>
            <div className='grid justify-items-stretch'>
                <h1 className='justify-self-start text-4xl ml-10 font-serif p-3 my-4'>Popular professional services</h1>
            </div>
            {/* carousel */}

            <Swiper
                
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' border-4 border-gray-200  w-80  h-72 mx-auto border-b-indigo-500 py-3' src={slide_image_8} alt="" />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Services;


