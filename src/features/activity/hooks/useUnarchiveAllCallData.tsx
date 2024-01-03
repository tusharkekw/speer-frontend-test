import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../activity.utils';

const useUnarchiveAllCallData = () => {
  const [success, setSuccess] = useState(false);

  const resetAllCalls = async (callBackFn:()=>void) => {;

    try {
      const response = await axios.patch(`${baseURL}/reset`);
      if (response.status === 200) {
        setSuccess(true);
        callBackFn()
      } 
    } catch (error) {
    } 
  };

  return { resetAllCalls,success };
};

export default useUnarchiveAllCallData;