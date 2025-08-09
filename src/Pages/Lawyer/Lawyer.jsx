import React from 'react';
import { Link } from 'react-router-dom';

const Lawyer = ({lawyer}) => {
    const {name,img,availability,experience,expert,licenseNo,id}=lawyer
    return (
        <div className='main flex flex-col justify-center items-center gap-3 shadow-2xl p-3 rounded-lg lg:flex-row lg:gap-6 lg:justify-start'>
           <div className=''>
            <img className='w-[250px] h-[300px] object-cover rounded-2xl  lg:w-[150px] lg:h-[170px] lg:object-cover lg:ml-4 lg:p-1' src={img} alt="" />
           </div>
          <div className='lg:flex lg:flex-col lg:gap-4'>
          <div className=' flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-2 ' >
                 <span className='border text-center font-bold bg-green-50 px-4 py-1
                  rounded-3xl text-green-400
                  lg:text-xs lg:px-2
                  '>{availability}</span>
                <span className='border text-center font-bold bg-blue-50 px-4 py-1
                 rounded-3xl text-blue-400 mt-2 lg:text-xs lg:px-2 lg:-mt-[0.1px]'>{experience}+ Years Experience</span>
           </div>
                <div className='p flex flex-col justify-center items-center -mt-2 lg:justify-start lg:items-start lg:ml-2'>
                      <p className='text-2xl font-semibold mt-1'>{name}</p>
                      <p className='font-medium'>{expert} Expert</p>
                      <p className=' flex items-center text-md -mt-1 font-semibold'>  <span className='text-2xl'>®</span> License No : {licenseNo}</p>
                     <Link to={`/about/${id}`}> <button className='border-1 border-blue-500 px-4 py-1 rounded-3xl w-full bg-blue-100 cursor-pointer mt-1 text-center text-blue-600 font-semibold'>View Details</button></Link>
             </div>
          </div>
        </div>
    );
};

export default Lawyer;