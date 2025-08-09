import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router-dom';
import LawyerData from '../LawyerData/LawyerData';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const data=useLoaderData()
    // console.log(data);
    
    return (
        <div className='mb-5'>
            <Helmet>
                <title>Law.BD / Home</title>
            </Helmet>
            <Banner/>
           <LawyerData  />
            <Services key={data.id} data={data}/>
        </div>
    );
};

export default Home;