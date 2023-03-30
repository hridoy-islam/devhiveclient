import React from 'react';
import image1 from '../../image/istockphoto-1322277517-612x612.jpg'
import image from '../../image/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'


const Services = () => {
    return (
        <div>
            <div className='grid justify-items-stretch'>
                <h1 className='justify-self-start text-4xl font-serif p-3 ml-60 my-4'>Popular professional services</h1>
            </div>
            {/* carousel */}
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    {/* card start 1 */}
                    <div className=' ml-60'>
                        <div className='flex '>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* cart end */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❮</a>
                        <a href="#slide2" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    {/* card start 2*/}
                    <div className=' ml-60'>
                        <div className='flex '>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* cart end 2 */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❮</a>
                        <a href="#slide3" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    {/* card start 3 */}
                    <div className=' ml-60'>
                        <div className='flex '>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* cart end */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❮</a>
                        <a href="#slide4" className="btn btn-circle btn-outline border-4 bg-slate-200 " >❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    {/* card start 4 */}
                    <div className=' ml-60'>
                        <div className='flex '>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div className="card w-80 h-96 bg-base-100  shadow-xl image-full mr-16">
                                <figure><img src={image1} alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* cart end */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-outline border-4  bg-slate-200 ">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-outline border-4 bg-slate-200  ">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;

