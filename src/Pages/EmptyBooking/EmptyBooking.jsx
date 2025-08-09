import React from 'react';
import { Link } from 'react-router';

const EmptyBooking = () => {
    return (
        <div className='h-[450px] mulish flex flex-col justify-center items-center text-center gap-3 p-3'>
            <h3 className='text-xl font-bold'>You Have Not Booked Any Appointment Yet </h3>
            <p className='text-sm'>A well-kept appointment is the foundation of trust in any professional relationship.</p>
           <Link to='/'> <button className='btn btn-secondary'>Book Appointment</button></Link>
        </div>
    );
};

export default EmptyBooking;