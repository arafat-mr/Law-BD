import React,{useEffect,useState} from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { useNavigation } from 'react-router';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
const Root = () => {
    const navigation = useNavigation();
    const [showOutlet, setShowOutlet] = useState(true);

  useEffect(() => {
    if (navigation.state === 'loading') {
      setShowOutlet(false);
    } else {
      const time = setTimeout(() => {
        setShowOutlet(true); 
      }, 100);
      return () => clearTimeout(time);
    }
  }, [navigation.state]);
    return (
        <div>
           <Navbar/>
           
           <div className='min-h-[400px] flex flex-col 
           items-center justify-center w-full mb-10 '
           >
            
            {navigation.state === 'loading' || !showOutlet ? (
          <LoadingSpinner />
        ) : <div className="  w-full">
        <Outlet />
      </div>}</div>
           <Footer/>
           
        </div>
    );
};

export default Root;