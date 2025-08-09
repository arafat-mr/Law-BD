import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const data =useLoaderData()
    // console.log(data);
    
    
    return (
        <div className='text-center mulish w-11/12 mx-auto'>

            <h3 className='text-3xl font-bold'>Blogs</h3>
            <p className='mt-3'>Lets explore some basic concepts that will make you good developer</p>
            <div className='mt-10 '>
            {
                data.map((singleData,index)=><Blog key={index}  singleData={singleData} data={data}/>)
            }
            </div>
        </div>
    );
};

export default Blogs;