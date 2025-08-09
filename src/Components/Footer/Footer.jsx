import React from 'react';
import { NavLink } from 'react-router';
<script src="https://kit.fontawesome.com/c3635d12ab.js" crossorigin="anonymous"></script>
const Footer = () => {
    return (
        <div className='bg-black text-white mulish flex flex-col justify-center items-center h-[400px] space-y-4 lg:space-y-6 '>
            <div className='flex justify-center items-center gap-4 '><img className='w-10' src="/logo-footer.png" alt="" /> <span className='text-2xl font-semibold'>Law.BD</span></div>
            <ul className='flex flex-col gap-4 items-center justify-center md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row lg:grid-col-1 lg:gap-12 '>
            <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/bookings">My Bookings</NavLink></li>
              <li><NavLink to="/blogs">Blogs</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
           <div className='border border-dashed w-11/12 '></div>
            <div className=' flex gap-8 mt-5 mb-5'>
                <a href='https://www.facebook.com/share/1HVAyqPVHd/' target='blank'><i  class="fa-brands fa-facebook text-2xl"></i></a>
            <a href="https://www.instagram.com/4rafat.mr?igsh=MW83ZnkybW0wZjkycg==" target='blank'><i class="fa-brands fa-instagram text-2xl"></i></a>
            <a href="https://github.com/arafat-mr" target='blank'><i class="fa-brands fa-github text-2xl"></i></a>
            <a href="https://www.youtube.com/@ArafatMr-n3i" target='blank'><i class="fa-brands fa-youtube text-2xl"></i></a></div>
        </div>
    );
};

export default Footer;