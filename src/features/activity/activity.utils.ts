import moment from 'moment';
import { CallData } from './types/activity.type';

export const groupActivityByDate = (data: CallData[]) => {
  const groupedData: { [date: string]: CallData[] } = {};

  data.forEach((item) => {
    const date = moment(item.created_at).format('YYYY-MM-DD');
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(item);
  });

  return groupedData;
};

export const CALL_ICONS_MAPPING = {
  outbound: 'images/outgoing-call.svg',
  inbound: 'images/incoming-call.svg',
};

export const baseURL = 'https://cerulean-marlin-wig.cyclic.app';
