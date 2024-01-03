import axios from "axios";
import { useEffect, useState } from "react";

import { CallData } from "../types/activity.type";
import { baseURL } from "../activity.utils";

export const useGetActivityFeedData = () => {
  const [activityData, setActivityData] = useState<CallData[]>([]);

  useEffect(() => {
    // Fetch activities from the API
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${baseURL}/activities`);
        setActivityData(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  const refreshActivities = async () => {
    try {
      const response = await axios.get(`${baseURL}/activities`);
      setActivityData(response.data);
      console.log('refetching')
    } catch (error) {
      console.error('Error refreshing activities:', error);
    }
  };

  return { activityData, refreshActivities };
}