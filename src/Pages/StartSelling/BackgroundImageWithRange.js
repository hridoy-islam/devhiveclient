import React from 'react';
import img from '../../image/selling.jpg'

const BackgroundImageWithRange = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${img})`,
            backgroundPosition:'center',
            height:'60vh'
            
          }}>
            <div className='text-center pt-10'>
               <div>
                 <h1 className='text-5xl font-bold'>Work your way</h1>
                <p className='text-2xl'>You bring the skill. We'll make earning easy.</p>
                <button className="btn btn-error mt-4">Become a seller</button>
               </div>
            </div>


            <div className='flex justify-around my-36 bg-teal-200 opacity-75 py-8'>
                <div>
                    <h3 className='text-3xl font-bold'>A Gig is Bought Every</h3>
                    <p className='text-xl'>4 SEC</p>
                </div>
                <div>
                    <h4 className='text-3xl font-bold'>Transactions</h4>
                    <h1 className='text-xl'>50M+</h1>

                </div>
                <div>
                    <h4 className='text-3xl font-bold'>Price Range</h4>
                    <h1 className='text-xl'>$5 - $10,000</h1>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImageWithRange;