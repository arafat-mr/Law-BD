import React, { useEffect, useState } from "react";
import EmptyBooking from "../EmptyBooking/EmptyBooking";
import SingleAppointment from "../SingleAppointment/SIngleAppointment";
import { getAppointment } from "../Utilities/Utilities";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const [savedData, setSavedData] = useState([]);

  //  
  useEffect(() => {
    const bookings = getAppointment();
    setSavedData(bookings);
  }, [setSavedData]);

  // console.log(savedData.length);

  return (
    
    <div className="mulish w-full">
      <Helmet>
  <title>Law.BD / My Bookings</title>
  </Helmet>
      {savedData.length < 1 ? <EmptyBooking /> : <SingleAppointment />}
    </div>
  );
};

export default MyBookings;
