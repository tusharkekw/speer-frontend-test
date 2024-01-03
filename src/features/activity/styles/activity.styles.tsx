import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => {
    return prop !== 'backgroundColor';
  },
})<{
  backgroundColor?: string;
}>(({ backgroundColor }) => ({
  padding: '10px 20px',
  backgroundColor: backgroundColor,
  color: 'white',
  margin: '32px',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease',
}));