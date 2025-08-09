import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const ServiceCard = ({singleData}) => {
  
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
      });
    
      return (
        <div
          ref={ref}
          className='mulish bg-gray-300 rounded-xl p-6 w-10/12 mx-auto space-y-2 flex items-center justify-center flex-col'
        >
          <img src={singleData.img} alt="" />
          <h3 className='mulish font-bold text-2xl '>
            {inView && <CountUp delay={0.5} duration={3} end={singleData.number} />}+
          </h3>
          <h4 className='font-semibold mulish '>Total {singleData.category}</h4>
        </div>
      );
};

export default ServiceCard;