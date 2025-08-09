import React from 'react';

const Blog = ({singleData}) => {
    // console.log(data.question);
    const now = new Date();
const localString = now.toLocaleString();


    const {question,answer} = singleData
    return (
        
        <div className=' p-4 rounded-xl mt-5  flex flex-col justify-start items-start gap-2 bg-gray-200'>
            <h3 className='mt-5 font-bold text-xl'> {question}</h3>
            <div className=' w-full border border-dashed'></div>
            <h3 className='text-blue-400 font-semibold'>Answer: </h3>
            <p className='mb-3'>{answer}</p>
            <div className='border border-dashed w-full mb-3' ></div>
            <h3 className='text-sm'><i class="fa-regular fa-calendar text-xl mr-1"></i> Added at {localString}</h3>
        </div>
    );
};

export default Blog;