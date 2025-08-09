import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = ({data}) => {
    return (
        <div className='w-11/12 mx-auto mulish flex flex-col gap-4'>
            <h2 className='text-center text-xl font-semibold md:text-2xl lg:text-3xl mt-5 '>We Provide Best Law Services</h2>
            <p className='text-center text-sm font-semibold opacity-70 '>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='mt-5  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 items-center justify-center '>
               {
                data.map(singleData=><ServiceCard key={singleData.id} singleData={singleData}/>)
               }
            </div>
        </div>
    );
};

export default Services;