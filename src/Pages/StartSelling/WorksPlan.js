import React from 'react';
import { FaRegFile, FaRegEnvelopeOpen, FaRegCalendarCheck } from 'react-icons/fa'

const WorksPlan = () => {
    return (
        <div className='bg-gray-300 mt-20 pt-10'>
            <h1 className='text-center text-5xl font-bold'>How it works</h1>
            <div className='flex justify-around gap-10 mt-4'>
                <div>
                    <p className='text-5xl w-1/3 m-auto '> <FaRegFile className='text-center' /></p>
                    <h1 className='text-3xl font-bold'>1. Create a Gig</h1>
                    <p className='text-xl' >Sign up for free, set up your Gig, and offer your work to our global audience.</p>
                </div>

                <div>
                    <p className='text-5xl w-1/3 m-auto'> <FaRegEnvelopeOpen /></p>
                    <h1 className='text-3xl font-bold'>2. Deliver great work</h1>
                    <p className='text-xl' >Get notified when you get an order and use our system to discuss details with customers.</p>
                </div>

                <div>
                    <p className='text-5xl w-1/3 m-auto '> <FaRegCalendarCheck /></p>
                    <h1 className='text-3xl font-bold'>3. Get paid</h1>
                    <p className='text-xl' >Get paid on time, every time. Payment is available for withdrawal as soon as it clears.</p>
                </div>
            </div>
        </div>
    );
};

export default WorksPlan;