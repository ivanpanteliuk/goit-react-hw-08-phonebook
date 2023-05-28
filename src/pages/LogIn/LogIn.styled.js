import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import phone2 from '../../images/phone2.png';

export const StyledButton = styled(Button)`
  background-color: #97efe9;
  color: black;
  &:hover {
    background-color: #2bded2;
  }
`;

export const LogInContainer = styled.div`
  background-image: url(${phone2});
  background-repeat: no-repeat;
  background-position: 80% 10%;
  background-size: 20%;
  height: 400px;
`;
