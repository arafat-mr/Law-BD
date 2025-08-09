import React from 'react';
import { Link, useLoaderData,  useParams } from 'react-router-dom';
import { addAppointment } from '../Utilities/Utilities';
import { ToastContainer } from 'react-toastify';
import LicenseError from '../LicenseError/LicenseError';
import { Helmet } from 'react-helmet-async';
const LawyerProfile = () => {
    const {id}=useParams()
   

    // console.log(id);
    const data=useLoaderData()
    if (!/^\d+$/.test(id)) {
      return (
        <div>
          <LicenseError  id={id}/>
        </div>
      );
    }
    const convertedId=parseInt(id)
    // console.log(data);
    
    const singleData=data.find(lawyer=>lawyer.id == convertedId)
    // console.log(  singleData);
    if (!singleData  ) {
      return (
        <div>
          <LicenseError  id={id}/>
        </div>
      );
    }
    const {name,experience,expert,licenseNo,img,days,fees}=singleData
    // const parsed= parseInt(singleData.id)
    // console.log(parsed, typeof parsed);
    const persedSingleData=parseInt(singleData.id)
    // console.log( convertedId,persedSingleData ,typeof persedSingleData);
    
  
    const handleBookings=()=>{
      addAppointment(singleData)
     
    }
      

    
 
    
        return (
        <div>
          <Helmet><title>Law.BD /{name}</title></Helmet>
          {
           persedSingleData !== convertedId ? <LicenseError/>: <div>
              <div className=' w-11/12 mx-auto bg-gray-200 h-[200px] flex flex-col justify-center items-center mulish gap-3 p-2 rounded-lg shadow-md'> 
          <h3 className='text-center text-xl lg:text-3xl font-bold'>Lawyer's Profile Details</h3>
          <p className='text-center text-xs  lg:text-lg font-semibold'>A lawyer isn't just someone who knows the law, but someone who uses it wisely to defend, protect, <br /> and fight for justice—even when the odds seem impossible. Their voice becomes power, their words—shield and sword.</p>
          </div>

          <div className='flex flex-col justify-center items-center p-3 rounded shadow-2xl w-11/12
           mx-auto mt-5 gap-2 md:flex-row md:justify-start md:gap-10 lg:flex-row lg:justify-start lg:gap-10 lg:p-5'>

           <div className='p-4 bg-gray-100 rounded-xl'>
               <img className='rounded-lg  w-[140px] h-[140px] object-cover md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] lg:object-cover lg:object-center' src={img} alt="" />
           </div>
           <div className='mulish flex flex-col justify-center items-center md:gap-1'>
               <span className='border bg-blue-100 text-blue-500 px-3 py-0.5 rounded-3xl'>{experience}+Years Experience</span>
               <p className='text-2xl font-semibold'>{name}</p>
               <p className='flex text-xs md:text-lg md:gap-3 lg:justify-center lg:items-center '><span>{expert} Expert</span><span className=' text-xs md:text-2xl ml-4 md:-mr-2.5 md:-mt-0.5'>®</span> License No : {licenseNo}</p> 
               <div>Availability : <span className='text-xs'> {days.map((day,index)=><button key={index} className='border px-2 py-0.5 border-yellow-200 bg-yellow-200 rounded-3xl mr-2'>{day}</button>)}</span>
               </div>
               <p>Consultations Fees :<span className='text-green-700 font-bold ml-2'>Taka {fees}</span></p>
           </div>
          </div> 
  
          <div className='w-11/12 mx-auto shadow-xl border border-gray-200 rounded-lg p-4 mt-8  '>
          <div className='mulish  mb-5 flex flex-col  '>
           <h3 className='font-bold text-2xl border-b border-dashed text-center mb-7 -mt-2  p-3'>Book An Appointment</h3>
           <div className=' border-b  flex w-full justify-between'> <p className='font-bold text-sm '>Availability</p>  <p className='bg-green-100  text-green-500 rounded-3xl text-center text-sm px-3 py-0.5 mb-2'>Lawyer Available Today</p></div>
          </div>
          <div className='flex flex-col justify-center text-center mulish font-semibold bg-orange-50 p-2 rounded-lg items-center lg:flex-row lg:items-start lg:rounded-3xl text-yellow-500'><p> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
</svg></p>
<p>
Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p></div>
<Link to='/bookings' ><div className='flex justify-center items-center w-full'><button onClick={handleBookings} className='w-full bg-green-500 text-white font-semibold mt-2 cursor-pointer py-2 rounded-3xl mulish'>Book Appointment Now</button>
</div></Link>

          </div>
         </div>
            
          }
           
          </div>
        
         
    );
};

export default LawyerProfile;