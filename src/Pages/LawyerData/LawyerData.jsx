import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';
// import { data } from 'react-router';

const LawyerData = () => {
const [displayLawyers,setDisplayLawyers]=useState([])
const [showAll,setShowAll]=useState(false)
const [btnText,sertBtnText]=useState('Show All')
    useEffect(()=>{
        fetch('lawyer.json')
        .then(res=>res.json())
        .then(data=>{
            if(showAll){
                setDisplayLawyers(data)
                sertBtnText('Show Less')
            } else{
                setDisplayLawyers(data.slice(0,6))
                sertBtnText('Show All')
            }
        })
        // console.log(displayLawyers);
        
    },[showAll])
    const handleDisplay=()=>{
        setShowAll(!showAll)
        if(showAll){
window.scrollTo(0,720)
        }
    }
    return (
        <>
        <div className='w-11/12 mx-auto mulish text-center p-3'>
            <h2 className='text-2xl font-bold md:text-3xl '>Our Best Lawyers</h2>
            <p className='text-sm md:text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
        <div className='border border-green-100 rounded-xl w-11/12  mx-auto'>
        <div className='p-3  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-10'>
           {
            displayLawyers.map(lawyer=><Lawyer key={lawyer.id} lawyer={lawyer} />)
           }
        
        </div>
        <div className='w-full flex justify-center items-center mt-10'><button onClick={handleDisplay} className='bg-green-500 mulish -mt-5 cursor-pointer mb-4 py-1 rounded-3xl
         w-6/12 md:w-4/12 md:py-2 lg:w-2/12 '>{btnText}</button></div> 
        </div>
       
        </>
    );
};

export default LawyerData;