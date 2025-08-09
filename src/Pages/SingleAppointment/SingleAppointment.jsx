import React, { useEffect } from "react";
import { useState } from "react";
import { getAppointment, removeAppointment } from "../Utilities/Utilities";
import AppointmentData from "../AppointmentData/AppointmentData";
import { ToastContainer } from "react-toastify";
import EmptyBooking from "../EmptyBooking/EmptyBooking";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// import { getAppointment } from '../Utilities/Utilities';
const SingleAppointment = () => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  useEffect(() => {
    const savedLawyer = getAppointment();

    setDisplayLawyers(savedLawyer);
  }, []);
  const handleRemove = (id) => {
    removeAppointment(id);
    setTimeout(() => {
      setDisplayLawyers(getAppointment());
    }, 500);
    window.scroll(0,0)
  };

  return (
    <>
      {displayLawyers.length < 1 ? (
        <EmptyBooking />
      ) : (
        <div className="w-full">
          <div className="w-full">
            <div className="w-11/12 mx-auto mt-5">
              {/* <SingleChart/>
               */}

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={displayLawyers}>
                  <CartesianGrid strokeDasharray="2 2" />
                  <Tooltip />

                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                    height={60}
                    tick={{ fontSize: 10, fill: "#374151" }}
                  />
                  <YAxis 
                   dataKey=''/>
                  <Bar dataKey="fees" fill="#10b981" shape={<TriangleBar />} />
                </BarChart>
              </ResponsiveContainer>

              {/* <SingleChart chartData={chartData}/> */}
            </div>

            <div className="border border-green-100 rounded-xl w-11/12 -mt-5 lg:mt-10 mx-auto ">
              {/* <LineChart width={400} height={400} data={} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart> */}
              <h1 className="text-lg   md:text-3xl font-bold text-center  mt-6 p-2">
                My Today Appointments
              </h1>
              <p className="text-sm md:text-sm  text-center lg:mt-3 p-3">
                Our platform connects you with verified, experienced Lawyers
                across various specialties — all at your convenience.
              </p>
              <div className="p-3  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1  lg:gap-10">
                {displayLawyers.map((lawyer) => (
                  <AppointmentData
                    key={lawyer.id}
                    lawyer={lawyer}
                    id={lawyer.id}
                    handleRemove={handleRemove}
                  />
                ))}
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleAppointment;
