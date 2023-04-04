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
                spaceBetween={2}
                slidesPerView={4}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide >
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80  shadow-lg container bg-neutral-400 border-2 ">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl   font-serif  uppercase ">working at  home</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_1} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">react Developer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_2} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">redux developer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_3} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">  Graphics design </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_4} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">php developer and backend</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_5} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>            
                        </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">full stake developer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_6} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">working at  home</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_7} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-sm h-max mx-auto w-80 shadow-lg container bg-neutral-400 border-2">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                            <p className="text-2xl font-serif  uppercase ">data entry expert</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                            <img src={slide_image_8} alt="" className="w-full h-80  -mt-16 bg-center bg-cover " />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Services;


