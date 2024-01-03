import { Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { StickyNavBar, StyledStack } from '../styles/nav-bar.styles';
import { ActivityTabEnum } from '../../../../activity/activity.enum';

const NavBar: React.FC<{
  selectedTab: ActivityTabEnum;
  handleTabChange: (value: any) => void;
}> = ({ handleTabChange, selectedTab }) => {
  return (
    <StickyNavBar>
      <StyledStack height="100%" justifyContent="space-around">
        <StyledStack gap={1} px={2}>
          <WhatsAppIcon fontSize="large" sx={{ color: '#fff' }} />
          <Typography variant="h5" fontWeight={700} color="#fff">
            Activity
          </Typography>
        </StyledStack>
        <StyledStack gap={2}>
          <Button
            variant={'contained'}
            onClick={() => handleTabChange(ActivityTabEnum.INBOX)}
            sx={{ backgroundColor: '#FFA000',borderBottom: selectedTab === ActivityTabEnum.INBOX ? '2px solid black': 'none' }}
          >
            InBox
          </Button>
          <Button
            variant={ 'contained'}
            onClick={() => handleTabChange(ActivityTabEnum.ALL_CALLS)}
            sx={{ backgroundColor: '#4CAF50', borderBottom: selectedTab === ActivityTabEnum.ALL_CALLS ? '2px solid black': 'none' }}
          >
            AllCalls
          </Button>
        </StyledStack>
      </StyledStack>
    </StickyNavBar>
  );
};

export default NavBar;
