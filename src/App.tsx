import { useState } from 'react';
import './App.css';
import ActivityFeed from './features/activity/components/activity-feed.component';
import NavBar from './features/common/components/navbar/components/nav-bar.component';
import { ActivityTabEnum, ActivityTabType } from './features/activity/activity.enum';

const App = () => {
  const [selectedTab, setSelectedTab] = useState<ActivityTabType>(ActivityTabEnum.INBOX); 

  return (
    <>
      <NavBar selectedTab={selectedTab} handleTabChange={setSelectedTab} />
      <ActivityFeed selectedTab={selectedTab} />
    </>
  );
};

export default App;
