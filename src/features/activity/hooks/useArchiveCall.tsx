import axios from 'axios';
import { useState } from 'react';

import { baseURL } from '../activity.utils';

const useArchiveCall = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const archiveCall = async (callId:string) => {
    const apiUrl = `${baseURL}/activities/${callId}`;
    
    try {
      const response = await axios.patch(apiUrl, {
        is_archived: true,
      });

      if (response.status === 200 || response.status === 204) {
        console.log('Call archived successfully!');
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return { archiveCall,isError };
};

export default useArchiveCall;
