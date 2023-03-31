import React, { useEffect, useState } from 'react';

const FreelancersImage = () => {
    const [Persons, setParsons] = useState([])

    useEffect(() => {
        fetch('FackData.json')
            .then(res => res.json())
            .then(data => setParsons(data))
    }, [])


    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-40 px-5'>Join our growing freelance community</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-5  gap-5'>

                {
                    Persons.map(person => <div style={{
                        backgroundImage: `url(${person.img})`,
                        backgroundPosition: 'center',
                        height: '35vh',
                        backgroundRepeat: 'no-repeat'

                    }}>
                        <h4 className='text-xl font-bold'>{person.profession}</h4>
                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default FreelancersImage;