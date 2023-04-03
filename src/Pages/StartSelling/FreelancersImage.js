import React, { useEffect, useState } from 'react';

const FreelancersImage = () => {
    const [Persons, setParsons] = useState([])

    useEffect(() => {
        fetch('FackData.json')
            .then(res => res.json())
            .then(data => setParsons(data))
    }, [])


    return (
        <div className='px-5'>
            <h1 className='text-center text-3xl font-bold mt-20 px-5'>Join our growing freelance community</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-5  gap-5'>

                {
                    Persons.map(person => <div style={{
                        backgroundImage: `url(${person.img})`,
                        backgroundPosition: 'center',
                        height: '35vh',
                        backgroundSize:'center',
                        backgroundRepeat: 'no-repeat'

                    }}>
                        <h4 className='text-xl font-bold relative left-2  top-44 text-[white] '>{person.profession}</h4>
                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default FreelancersImage;