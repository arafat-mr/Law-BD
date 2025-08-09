import { ToastContainer, toast } from "react-toastify";

export const getAppointment = () => {
  const bookings = localStorage.getItem("bookings");

  if (bookings) {
    const parsed = JSON.parse(bookings);
    return parsed;
  } else {
    return [];
  }
};
export const addAppointment = (lawyer) => {
  let bookings = getAppointment();
  //   console.log(lawyer);
  const isExist = bookings.find((booking) => booking.id === lawyer.id);
  const notify = () =>
    toast.success(`Appointment scheduled for ${lawyer.name} successfully`);
  const notify2 = () => toast.error("Appointment already scheduled for today");

  if (isExist) {
    return notify2();
  } else {
    bookings.push(lawyer);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    notify();
  }
  // bookings.push(lawyer)
  // console.log( typeof bookings);

  // if

  // bookings.push(lawyer)
};

export const removeAppointment = (id) => {
  const bookings = getAppointment();
  const remainingBookings = bookings.filter((single) => single.id !== id);
  // notify3()

  // notify3()
 toast.error("Appoinment cancelled");
  localStorage.setItem("bookings", JSON.stringify(remainingBookings)) 
//    notify3()
    
};
