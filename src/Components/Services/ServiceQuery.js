import React, { useEffect, useState } from 'react';
// import { useGetQueryServiceQuery } from '../../features/api/Services/ServicesApi';
import { Link, useParams } from 'react-router-dom';
import ServiceQueryItem from './ServiceQueryItem';
import { useGetQueryServiceQuery } from '../../features/api/Services/ServicesApi';

const ServiceQuery = () => {
    const { category } = useParams();
    
    console.log(category);
    const { data: service } = useGetQueryServiceQuery(category);
    console.log(service);
   

    return (
        <div className=" grid lg:col-span-3 md:col-span-2 sm:col-span-1 gap-6">

            {
                service?.map(serviceItem => <ServiceQueryItem key={serviceItem._id} service={serviceItem}></ServiceQueryItem>)
            }

        </div>
    );
};

export default ServiceQuery;