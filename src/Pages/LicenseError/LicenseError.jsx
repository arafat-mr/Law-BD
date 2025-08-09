import React from 'react';
import { Link } from 'react-router';



const LicenseError = ({id}) => {
    
   
    
    return (
        <div className='mulish space-y-2 text-center'>
            <h3 className='text-3xl font-bold'>No Lawyer Found!!</h3>
            <h3 className='text-md'>No Lawyer Found With The Id : <br /><i class="fa-solid fa-arrow-right text-sm font-bold"></i> <span className='text-xl font-bold text-red-600'>{id}</span>   </h3>

          <Link to='/'>  <button className='bg-green-500 px-10 py-2 text-white rounded-md font-semibold'>View All Lawyers</button></Link>
        </div>
    );
};

export default LicenseError;