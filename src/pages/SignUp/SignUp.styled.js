import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import phone from '../../images/phone.png';

export const StyledButton = styled(Button)`
  background-color: #97efe9;
  color: black;

  &:hover {
    background-color: #2bded2;
  }
`;

export const SignUpContainer = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position: 25%;
  background-size: 20%;
`;
