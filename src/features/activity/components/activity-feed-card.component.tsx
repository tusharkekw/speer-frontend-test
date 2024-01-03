import React from 'react';
import moment from 'moment';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Avatar, Button, Stack, Typography } from '@mui/material';

import { CallData } from '../types/activity.type';
import { StyledStack } from '../../common/components/navbar/styles/nav-bar.styles';
import { CALL_ICONS_MAPPING } from '../activity.utils';
import useArchiveCall from '../hooks/useArchiveCall';

const ActivityFeedCard: React.FC<{ callData: CallData, refreshActivities:any
}> = ({ callData,refreshActivities }) => {
  const { archiveCall,isError } = useArchiveCall();

  const { id,created_at, direction, from, via, call_type } = callData;


  const time = moment(created_at).format('h:mm A');
  
  const airCallContact = via ? via : 'Unknown Called'
  const isMissedCall = call_type === 'missed'
  const callLabel =
  isMissedCall ? `tried to call on ${airCallContact}` : `called on ${airCallContact}`;

  // Assuming incoming is a fallback because in many cases direction option is missing
  const iconSrc = direction ? CALL_ICONS_MAPPING[direction] : CALL_ICONS_MAPPING['inbound'];

  const handleArchive = async (callId:string) => {
    await archiveCall(callId);
    if (!isError) {
      await refreshActivities();
    } 
  };


  return (
    <StyledStack
      border={'1px solid #000000'}
      height={'50px'}
      borderRadius="12px"
      justifyContent="space-between"
      p={1}
      gap={2}
    >
      <Stack>
        <Avatar sx={{ width: 30, height: 30 }} src={iconSrc}></Avatar>
      </Stack>
      <Stack flexGrow={1}>
        <Typography color={isMissedCall ? 'red' : '#00000'}>{from}</Typography>
        <Typography variant="body2" color={isMissedCall ? 'red' : 'textSecondary'}>
          {callLabel}
        </Typography>
      </Stack>
      <Stack flexWrap={'nowrap'} direction='row' flexGrow={1}>
        <Typography variant="body2" color="textSecondary">
          {time}
        </Typography>
      </Stack>
      <Button variant='outlined' onClick={()=>handleArchive(id)}>
        <ArchiveIcon /> 
      </Button>
    </StyledStack>
  );
};

export default ActivityFeedCard;
