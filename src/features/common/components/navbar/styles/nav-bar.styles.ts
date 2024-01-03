import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';

export const StickyNavBar = styled(Box)({
  width: '100%',
  height: '75px',
  position: 'sticky',
  top: '0px',
  zIndex: 999,
  backgroundColor: '#008080',
});

export const StyledStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
});
