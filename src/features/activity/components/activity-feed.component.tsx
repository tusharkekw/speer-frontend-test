import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import ActivityFeedCard from './activity-feed-card.component';
import { useGetActivityFeedData } from '../hooks/useGetActivityFeedData';
import { groupActivityByDate } from '../activity.utils';
import { ActivityTabEnum, ActivityTabType } from '../activity.enum';
import { StyledButton } from '../styles/activity.styles';
import useArchiveAllCallData from '../hooks/useArchiveAllCallData';
import useUnarchiveAllCallData from '../hooks/useUnarchiveAllCallData';

const ActivityFeed: React.FC<{ selectedTab: ActivityTabType }> = ({ selectedTab }) => {
  const { activityData: activityFeedData, refreshActivities } = useGetActivityFeedData();
  const { archiveAllCalls } = useArchiveAllCallData();
  const { resetAllCalls } = useUnarchiveAllCallData();

  let trimmedData = activityFeedData;

  if (selectedTab === ActivityTabEnum.INBOX) {
    trimmedData = activityFeedData.filter((item) => !item.is_archived && item.from !== undefined );
  }

  const activityDataGroupedByDate = groupActivityByDate(trimmedData);

  const handleArchiveAll = () => {
    const callIds = trimmedData.map((callData) => callData.id);
    archiveAllCalls(callIds, refreshActivities);
  };

  const handleUnArchiveAll = () => {
    resetAllCalls(refreshActivities);
  };

  return (
    <Container maxWidth="md">
      <Stack direction={'row'}>
        <StyledButton
          variant="contained"
          onClick={handleArchiveAll}
          backgroundColor="#2e86de"
        >
          Archive All Calls
        </StyledButton>
        <StyledButton
          variant="contained"
          onClick={handleUnArchiveAll}
          backgroundColor="#28a745"
        >
          UnArchive All Calls
        </StyledButton>
      </Stack>
      {Object.keys(activityDataGroupedByDate).map((date) => (
        <Stack key={date} px={4}>
          <h2>{activityDataGroupedByDate[date].length > 0 ? date : ''}</h2>
          {activityDataGroupedByDate[date].map((callData) => (
            <Box mb={1}>
              <ActivityFeedCard
                key={callData.id}
                callData={callData}
                refreshActivities={refreshActivities}
              />
            </Box>
          ))}
        </Stack>
      ))}
    </Container>
  );
};

export default ActivityFeed;
