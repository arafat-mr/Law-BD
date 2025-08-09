import React from 'react';
// import { removeAppointment } from '../Utilities/Utilities';


const AppointmentData = ({lawyer,handleRemove}) => {
    const {id}=lawyer || {}
   
    return (
        <div className='border-2 rounded-xl shadow-2xl border-gray-200 p-3'>
        <div className='flex flex-col justify-between items-center p-4 text-center ' >
            <div className='space-y-2 '>
            <h3 className='text-xl md:text-2xl font-bold'>{lawyer.name} </h3>  
            <h4 className='text-sm md:text-lg'>{lawyer.expert} Expert</h4>
            </div>
            <div>
                <h3 className='text-xs md:text-lg'>Appointment Fee : {lawyer.fees} Taka</h3>
            </div>
        </div>
            <div className='w-full p-3'>
            <button onClick={()=>handleRemove(id)} className='w-full mx-auto cursor-pointer border-2 rounded-3xl text-red-500 font-semibold py-1 border-red-400'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentData;