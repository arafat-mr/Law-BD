import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/')
    }
    return (
        <div className='lg:p-2 '>
            <Navbar/>
 <div className=' rounded mt-20 w-full p-2  h-[350px] lg:h-full lg:mt-0 flex flex-col justify-center items-center gap-4 lg:'>
           <h3 className='text-lg md:text-4xl mulish font-semibold text-center '>Opps Page Not Found!</h3>
           <div>
            <img className='md:w-6/12 rounded-md mx-auto' src="https://i.ibb.co/gMW5wMfj/HTML-Yeti-404-Page.gif" alt="" />
           </div>
          <Link > <button onClick={handleNavigate}  className='btn btn-primary bg-pink-500'>Back To Home</button></Link>
        </div>
        </div>
       
    );
};

export default ErrorPage;