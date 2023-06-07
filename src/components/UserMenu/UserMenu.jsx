import Avatar from '@mui/material/Avatar';
import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import { UserContainer, UserEmail } from './UserMenu.styles';

import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <UserContainer>
      <Avatar sx={{ m: 1, bgcolor: '#97efe9' }}></Avatar>
      <UserEmail>Welcome, {user?.user?.name || user.name}</UserEmail>
      <StyledNavLink to="/" onClick={handleLogOut}>
        Log Out
      </StyledNavLink>
    </UserContainer>
  );
}
