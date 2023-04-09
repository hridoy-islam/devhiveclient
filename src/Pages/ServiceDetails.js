import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ServiceDetails = () => {
    const [basic, setBasic] = useState(false);
    const [standard, setStandard] = useState(false);
    const [premium, setPremium] = useState(false);
    const handleBasic = (e) =>{
        setBasic(true)
    }
    const handleStandard = (e) =>{
        setStandard(true)
    }
    const handlePremium = (e) =>{
        setPremium(true);
    }
    
return (
    <div className='container mx-auto flex my-10'>
        <div className='w-8/12 pl-8'>
            <h3 className='text-3xl font-semibold text-left pr-52'>I will design or redesign a wordpress website for your business</h3>
            <div className='flex items-start lg:flex-row flex-col pt-4 '>
                <img className='w-8 mr-3 rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1e44b2f69e5274ec43ddb15d05ada643-1633124675183/cfaf097c-b750-46b6-9fce-1e6e77937477.jpeg" alt="fiver_img" />
                <h4 className='text-md text-left font-medium mr-3 flex  items-start'>stevestephen493</h4>
                <h4 className='text-md text-left font-medium flex border-r-2 border-slate-300 pr-3  items-start'>Level 1 Seller</h4>
                <div className='rating pl-4'>
                    <span className='text-2xl base-400 text-warning'><AiFillStar></AiFillStar></span>
                    <span className='text-2xl base-400 text-warning'><AiFillStar></AiFillStar></span>
                    <span className='text-2xl base-400 text-warning'><AiFillStar></AiFillStar></span>
                    <span className='text-2xl base-400 text-warning'><AiFillStar></AiFillStar></span>
                    <span className='text-2xl base-400 text-warning'><AiFillStar></AiFillStar></span>
                    <h3 className='font-semibold text-warning pl-2'>5</h3>
                    <h3 className='font-medium '>(15)</h3>
                    <h3 className='pl-2 font-medium'>3 Orders in Queue</h3>
                </div>
            </div>
            <div className='w-10/12 mt-6'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img className='p-2 bg-primary w-full mx-auto h-full border-b-indigo-500 py-3' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/227511651/original/fb71669876dfcc66368bc36a2de8d49735801bf6/design-your-wordpress-website-using-divi.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' p-2 bg-primary w-full mx-auto h-full border-b-indigo-500 py-3' src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a07eabb0b917e47bef1dff6fdca99b32-1675744614/Screenshot%202023-02-06%20at%2011.36.07%20PM/design-your-wordpress-website-using-divi.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='p-2 bg-primary w-full  mx-auto border-b-indigo-500 py-3' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/227511651/original/fb71669876dfcc66368bc36a2de8d49735801bf6/design-your-wordpress-website-using-divi.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='p-2 bg-primary  w-full mx-auto border-b-indigo-500 py-3' src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a07eabb0b917e47bef1dff6fdca99b32-1675744614/Screenshot%202023-02-06%20at%2011.36.07%20PM/design-your-wordpress-website-using-divi.png" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl font-bold'>About this gig</h2>
                <p className='pr-52 py-6 text-md font-medium'>I help people unleash their big ideas online. From individuals just getting started to businesses looking to refresh their online presence, I gotcha.</p>
                <h3 className='text-lg font-bold pb-2'>Services we provide:</h3>
                <ul className='pl-10 font-medium list-disc pb-6'>
                    <li>Business WordPress websites</li>
                    <li>E-commerce website</li>
                    <li>Personal Websites & Blogs</li>
                </ul>
                <h3 className='text-lg font-bold pb-2'>This gig is perfect for:</h3>
                <ul className='pl-10 font-medium list-disc pb-6'>
                    <li>Individuals just starting off</li>
                    <li>Small business</li>
                    <li>Non-profits</li>
                    <li>Medium/Large Companies</li>
                    <li>Creative/Artists</li>
                </ul>
                <h3 className='text-lg font-bold pb-2'>Tools/Options:</h3>
                <ul className='pl-10 font-medium list-disc pb-6'>
                    <li>WordPress</li>
                    <li>Divi</li>
                    <li>Elementor</li>
                    <li>WordPress</li>
                    <li>Gutenburg</li>
                </ul>
                <h3 className='text-lg font-bold pb-2'>Features:</h3>
                <ul className='pl-10 font-medium list-disc pb-6'>
                    <li>Mobile-Friendly</li>
                    <li>Custom Design (no pre-built templates)</li>
                    <li>User-friendly UI/UX design</li>
                    <li>Speed optimized</li>
                    <li>Social media integration</li>
                </ul>
                <h3 className='text-lg font-bold pb-2'>Why Me?</h3>
                <ul className='pl-10 font-medium list-disc pb-6'>
                    <li>More than 12 years of experience</li>
                    <li>Unlimited Revision</li>
                    <li>Professionally Tested</li>
                </ul>
                <h3 className='text-lg font-bold pb-2'>Have questions? Please reach out and I'll get back to you as soon as possible.</h3>
            </div>
            <div>
                <h2 className='text-xl font-bold pt-10 pb-6'>About the seller</h2>
                <div className='flex items-start lg:flex-row pt-4 '>
                    <div>
                    <img className='w-36 mr-6 rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1e44b2f69e5274ec43ddb15d05ada643-1633124675183/cfaf097c-b750-46b6-9fce-1e6e77937477.jpeg" alt="fiver_img" />
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-lg text-left font-medium mr-3  '>stevestephen493</h4>
                        <h4 className='text-lg text-left font-medium pr-3 '>I build websites</h4>
                        <div className='rating pb-2 flex items-center'>
                            <span className='text-sm base-400 text-warning'><AiFillStar></AiFillStar></span>
                            <span className='text-sm base-400 text-warning'><AiFillStar></AiFillStar></span>
                            <span className='text-sm base-400 text-warning'><AiFillStar></AiFillStar></span>
                            <span className='text-sm base-400 text-warning'><AiFillStar></AiFillStar></span>
                            <span className='text-sm base-400 text-warning'><AiFillStar></AiFillStar></span>
                            <h3 className='font-light text-warning pl-1'>5</h3>
                            <h3 className='font-light '>(15)</h3>
                        </div>
                        <button className='btn btn-primary'>Contact Me</button>
                    </div>
                </div>
                <div className='border mt-6 w-10/12'>
                    <div className=' p-5 grid grid-cols-2 gap-4 '>
                        <div>
                            <h2 className='text-lg font-medium'>From</h2>
                            <h3 className='text-xl font-semibold'>United States</h3>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium'>Member since</h2>
                            <h3 className='text-xl font-semibold'>Sep 2021</h3>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium'>Avg. response time</h2>
                            <h3 className='text-xl font-semibold'>2 hours</h3>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium'>Last delivery</h2>
                            <h3 className='text-xl font-semibold'>3 days</h3>
                        </div>
                        <div>
                            <h2 className='text-lg font-medium'>Languages</h2>
                            <h3 className='text-xl font-semibold'>English</h3>
                        </div>
                    </div>
                    <p className='p-4 border-t text-lg font-medium'>Hi! I'm a web developer with over 12 years of experience and have completed over 150 projects using HTML, CSS, JavaScript, WordPress, and Drupal.</p>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold pt-10 pb-6'>Compare packages</h2>
                <div className="overflow-x-auto border w-10/12">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                        <tr>
                            <th>Package</th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Number of pages</th>
                            <td>2</td>
                            <td>6</td>
                            <td>12</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="active">
                            <th>Plugins/extensions installation</th>
                            <td>3</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Number of products</th>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='border p-6 mt-16 w-10/12 '>
            <h2 className='text-2xl font-bold pb-6'>Recommended for you </h2>
                <div className='flex '>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="card w-full shadow-2xl mr-3">
                        <figure><img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192388031/original/711d268a1de3e51ab210a8bd2483aef28fcb8a39.jpg" className='w-full' alt="banner_img" /></figure>
                        <div className="card-body bg-state-300">
                            <div className='flex'>
                                <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/348f16c5d833f5c147fac64226ac4542-1679827325884/7eabd055-9bd6-4cf3-847b-ebb4449d8d20.png" alt="profile_img" />
                                <div className='pl-4'>
                                    <h3 className='text-left font-bold'>giovanni_ux</h3>
                                    <h2 className='font-medium'>Top Rated Seller</h2>
                                </div>
                            </div>
                            <div>
                                <p className='text-left font-medium font-xl my-3'>I will design a custom and unique website</p>
                            </div>
                            <div className="card-actions justify-between items-center border-t-2 pt-4">
                                <div>
                                <div className="rating flex items-center">
                                    <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                    <h2 className='text-lg pl-1'>4.8</h2>
                                    <h3 className='text-lg pl-1'>(35)</h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <h2 className='text-sm items-center font-medium pt-1 pr-1 flex ' >STARTING AT</h2>
                                    <h3 className='text-2xl font-semibold'>$30</h3>
                                </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full shadow-2xl mr-3">
                        <figure><img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228730526/original/b7d7a8aa5493afe1c5983aff4e0e976dad1ab268.jpg" className='w-full' alt="banner_img" /></figure>
                        <div className="card-body bg-state-300">
                            <div className='flex'>
                                <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7eab80c32f7e9bb5121ab2f1a66f094e-1634034140753/10fbcda8-cb7e-42b7-9a12-613197ddd92c.png" alt="profile_img" />
                                <div className='pl-4'>
                                    <h3 className='text-left font-bold'>annann1</h3>
                                    <h2 className='font-medium'>Level 2 Seller</h2>
                                </div>
                            </div>
                            <div>
                                <p className='text-left font-medium font-xl my-3'>I will design modern and responsive react website</p>
                            </div>
                            <div className="card-actions justify-between items-center border-t-2 pt-4">
                                <div>
                                <div className="rating flex items-center">
                                    <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                    <h2 className='text-lg pl-1'>4.8</h2>
                                    <h3 className='text-lg pl-1'>(35)</h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                                    <h3 className='text-2xl font-semibold'>$50</h3>
                                </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full shadow-2xl mr-3">
                    <figure><img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/278420997/original/a9c85ed9abd2539882193ae4679abee4dd493420.png" className='w-full' alt="banner_img" /></figure>
                    <div className="card-body bg-state-300">
                        <div className='flex'>
                            <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ee754046722a8aadcb3db4cd0632926a-1674345420154/b3e185ff-affc-41af-8f8a-65ce4ff9e570.jpg"  alt="profile_img" />
                            <div className='pl-4'>
                                <h3 className='text-left font-bold'>suessvilliano</h3>
                                <h2 className='font-medium'>Level 2 Seller</h2>
                            </div>
                        </div>
                        <div>
                            <p className='text-left font-medium font-xl my-3'>I will do UI UX design for websites and mobile apps</p>
                        </div>
                        <div className="card-actions justify-between items-center border-t-2 pt-4">
                            <div>
                            <div className="rating flex items-center">
                                <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                <h2 className='text-lg pl-1'>4.8</h2>
                                <h3 className='text-lg pl-1'>(35)</h3>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                                <h3 className='text-2xl font-semibold'>$25</h3>
                            </div>
                        </div>
                    </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                    {/* <div className="card w-full bg-base-100 shadow-xl mx-3">
                    <figure><img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/192388031/original/711d268a1de3e51ab210a8bd2483aef28fcb8a39.jpg" className='w-full' alt="banner_img" /></figure>
                    <div className="card-body bg-state-300">
                        <div className='flex'>
                            <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/348f16c5d833f5c147fac64226ac4542-1679827325884/7eabd055-9bd6-4cf3-847b-ebb4449d8d20.png" alt="profile_img" />
                            <div className='pl-4'>
                                <h3 className='text-left font-bold'>giovanni_ux</h3>
                                <h2 className='font-medium'>Top Rated Seller</h2>
                            </div>
                        </div>
                        <div>
                            <p className='text-left font-medium font-xl my-3'>I will design a custom and unique website</p>
                        </div>
                        <div className="card-actions justify-between items-center border-t-2 pt-4">
                            <div>
                            <div className="rating flex items-center">
                                <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                <h2 className='text-lg pl-1'>4.8</h2>
                                <h3 className='text-lg pl-1'>(35)</h3>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='text-sm items-center font-medium pt-1 pr-1 flex ' >STARTING AT</h2>
                                <h3 className='text-2xl font-semibold'>$30</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl mx-3">
                    <figure><img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228730526/original/b7d7a8aa5493afe1c5983aff4e0e976dad1ab268.jpg" className='w-full' alt="banner_img" /></figure>
                    <div className="card-body bg-state-300">
                        <div className='flex'>
                            <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7eab80c32f7e9bb5121ab2f1a66f094e-1634034140753/10fbcda8-cb7e-42b7-9a12-613197ddd92c.png" alt="profile_img" />
                            <div className='pl-4'>
                                <h3 className='text-left font-bold'>annann1</h3>
                                <h2 className='font-medium'>Level 2 Seller</h2>
                            </div>
                        </div>
                        <div>
                            <p className='text-left font-medium font-xl my-3'>I will design modern and responsive react website</p>
                        </div>
                        <div className="card-actions justify-between items-center border-t-2 pt-4">
                            <div>
                            <div className="rating flex items-center">
                                <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                <h2 className='text-lg pl-1'>4.8</h2>
                                <h3 className='text-lg pl-1'>(35)</h3>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                                <h3 className='text-2xl font-semibold'>$50</h3>
                            </div>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='w-4/12 border h-48 max-h-max'>
            <div className="btn-group flex justify-between">
                <button onClick={handleBasic} className="p-5 w-4/12 border-r border-b bd-primary">Basic</button>
                <button onClick={handleStandard} className="p-5 w-4/12 text-white bg-primary border-r border-b">Standard</button>
                <button onClick={handlePremium} className="p-5 w-4/12 border-b">Premium</button>
            </div>
        </div>
    </div>
 );
};

export default ServiceDetails;