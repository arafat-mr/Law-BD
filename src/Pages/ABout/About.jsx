import React from 'react';
import LicenseError from '../LicenseError/LicenseError';
import {  useParams } from 'react-router';

const About = () => {
    const data =useParams()
    console.log(data);
    
    return (
        <div>
            <LicenseError data={data}/>
        </div>
    );
};

export default About;