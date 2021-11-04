import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/farhan-nahid/creative-academy/main/public/allServices.json';
    axios
      .get(url)
      .then((res) => setServices(res.data))
      .catch((err) => toast.error('Something Went Wrong!!'));
  }, []);
  return [services];
};

export default useServices;
