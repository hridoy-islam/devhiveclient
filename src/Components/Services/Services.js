import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const sliders = [1, 2, 3, 4]
    return (
        <div className='container mx-auto p-10'>
            <div className='grid justify-items-stretch'>
                <h1 className='text-3xl text-center font-extrabold ml-10 font-serif p-3 my-4'>Popular professional services</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    sliders.map(slider => <>
                        <Link
                            href="#"
                            class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
                        >
                            <div class="absolute inset-0 bg-black/25"></div>

                            <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                                    <h3 class="text-xl text-[white] font-bold sm:text-2xl">Rome</h3>

                                    <p class="text-sm text-[white]">Italy</p>
                                </div>
                            </div>
                        </Link>

                    </>)
                }
            </div>
        </div>
    );
};

export default Services;


