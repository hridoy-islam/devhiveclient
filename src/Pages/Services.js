import { FaVideo } from 'react-icons/fa';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Services = () => {
    return (
        <div className='container mx-auto'>
            <div className='lg:ml-0 mt-10 ml-6'>
                <h3 className='text-4xl font-bold text-left'>Website Design</h3>
                <div className='flex items-start lg:flex-row flex-col pt-4 '>
                <h4 className='text-lg text-left font-medium text-slate-400  flex  items-start'>Get a beautiful website design that people love to engage with.</h4>
                <button className=" border-2 rounded-xl px-2 text-lg font-semibold text-slate-700 lg:ml-2 flex"><span className='px-1 pt-1.5'><FaVideo ></FaVideo></span>How Devhive Works</button>
                </div>
            </div>
            <div className='mt-8 flex'>
                <div className='mr-10'>
                    <select className="select select-bordered w-full max-w-xs">
                    <option selected>Service Option</option>
                    <option>Web Design</option>
                    <option>Graphic Design</option>
                    <option>UI Design</option>
                   
                    </select>
                </div>
                <div className='mr-10'>
                    <select className="select select-bordered w-full max-w-xs">
                    <option selected>Seller Details</option>
                    <option>New Seller</option>
                    <option>Top Seller</option>
                    <option>Level Two</option>
                   
                    </select>
                </div>
                <div className='mr-10'>
                    <select className="select select-bordered w-full max-w-xs">
                    <option selected>Budget</option>
                    <option>$5 - $50</option>
                    <option>$50 - $200</option>
                    <option>$200 - $1000</option>
                   
                    </select>
                </div>
                <div className='mr-10'>
                    <select className="select select-bordered w-full max-w-xs">
                    <option selected>Delivery Time</option>
                    <option>Express 24H</option>
                    <option>up to 5 Days</option>
                    <option>Anytime</option>
                   
                    </select>
                </div>
                
                
                
            </div>
            <div className='mt-10 mb-10 grid lg:grid-cols-4 grid-cols gap-6 '>
                <div className="card w-full bg-base-100 shadow-xl ">
                <figure><img src="https://media.istockphoto.com/id/1364358321/photo/developing-programming-and-coding-technologies-with-website-design-in-virtual-diagram.jpg?b=1&s=170667a&w=0&k=20&c=lqtg6fx99gv83yRrZV9ttgQLRBti2zgjBNbPR9RWJGU=" alt="banner_img" /></figure>
                <div className="card-body bg-state-300">
                    <div className='flex'>
                        <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/bdbcbe0eebb34dcf7fa083e8fd37ed08-1673712364002/1c14df2c-67f0-4008-a960-01186accf310.JPG" alt="profile_img"  />
                        <div className='pl-4'>
                            <h3 className='text-left font-bold'>ali_iqbal</h3>
                            <h2 className='font-medium'>Level 2 Seller</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-left font-medium font-xl my-3'>I will design modern and responsive react website</p>
                    </div>
                    <div className="card-actions justify-between items-center border-t-2 pt-4">
                        <div>
                            <div className="rating flex items-center">
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
                            <h2 className='text-lg pl-1'>4.8</h2>
                            <h3 className='text-lg pl-1'>(35)</h3>
                            </div>
                        </div>
                        <div className='flex'>
                            <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                            <h3 className='text-2xl font-semibold'>$5</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
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
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
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
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
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
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
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
                <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://media.istockphoto.com/id/1364358321/photo/developing-programming-and-coding-technologies-with-website-design-in-virtual-diagram.jpg?b=1&s=170667a&w=0&k=20&c=lqtg6fx99gv83yRrZV9ttgQLRBti2zgjBNbPR9RWJGU=" alt="banner_img" /></figure>
                <div className="card-body bg-state-300">
                    <div className='flex'>
                        <img className='rounded-full' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/bdbcbe0eebb34dcf7fa083e8fd37ed08-1673712364002/1c14df2c-67f0-4008-a960-01186accf310.JPG" alt="profile_img" />
                        <div className='pl-4'>
                            <h3 className='text-left font-bold'>ali_iqbal</h3>
                            <h2 className='font-medium'>Level 2 Seller</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-left font-medium font-xl my-3'>I will design modern and responsive wordpress website</p>
                    </div>
                    <div className="card-actions justify-between items-center border-t-2 pt-4">
                        <div>
                        <div className="rating flex items-center">
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
                            <h2 className='text-lg pl-1'>4.8</h2>
                            <h3 className='text-lg pl-1'>(35)</h3>
                            </div>
                        </div>
                        <div className='flex'>
                            <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                            <h3 className='text-2xl font-semibold'>$5</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
                            <h2 className='text-lg pl-1'>4.8</h2>
                            <h3 className='text-lg pl-1'>(35)</h3>
                            </div>
                        </div>
                        <div className='flex'>
                            <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                            <h3 className='text-2xl font-semibold'>$45</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
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
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400" />
                            <h2 className='text-lg pl-1'>4.8</h2>
                            <h3 className='text-lg pl-1'>(35)</h3>
                            </div>
                        </div>
                        <div className='flex'>
                            <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                            <h3 className='text-2xl font-semibold'>$30</h3>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="btn-group my-10 mb-10 flex justify-center">
                <button className="border-2 border-slate-700 py-1 px-3 mx-1"><MdOutlineArrowBackIos/></button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">1</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">2</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">3</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">4</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1"><MdOutlineArrowForwardIos/></button>
            </div>
        </div>
    );
};

export default Services;