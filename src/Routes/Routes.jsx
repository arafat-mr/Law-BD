import React, { Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import LawyerProfile from '../Pages/LawyerProfile/LawyerProfile';
import About from '../Pages/ABout/About';
import MyBookings from '../Pages/MyBookings/MyBookings';
import LicenseError from '../Pages/LicenseError/LicenseError';
import Blogs from '../Pages/Blog/Blogs';
 
export const  router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement: <ErrorPage/>,
   children:[
    {
        index: true,
        Component: Home,
        path:'/',
        loader:()=>fetch('../service.json')
    },
    {
      path:'/about',
      Component:About,
      
    },
    {
      path:'/about/:id',
      Component:LawyerProfile,
      loader:()=>fetch('../lawyer.json'),
      errorElement:<LicenseError/>
     
    },
    {
      path:'/bookings',
      Component: MyBookings,
      loader:()=>fetch('../lawyer.json')
    },
    {
      path:'/blogs',
      Component:Blogs,
      loader: ()=> fetch('../blog.json')
    },
    
    
   ]
  },
]);