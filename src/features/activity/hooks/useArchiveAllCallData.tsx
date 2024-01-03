import { useState } from "react";
import useArchiveCall from "./useArchiveCall";

const useArchiveAllCallData = () => {
  const { archiveCall } = useArchiveCall();
  const [isError, setIsError] = useState(false);

  const archiveAllCalls = async (callIds: string[], callBackFn:()=>void) => {
    try {
      const archivePromises = callIds.map(async (callId) => {
        await archiveCall(callId);
      });

      await Promise.all(archivePromises);
      callBackFn();
      console.log('All calls archived successfully!');
    } catch (error) {
      setIsError(true);
    }
  };

  return { archiveAllCalls,isError }
}

export default useArchiveAllCallData;
