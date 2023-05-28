import Avatar from '@mui/material/Avatar';
import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import { UserContainer, UserEmail } from './UserMenu.styles';

import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <UserContainer>
      <Avatar sx={{ m: 1, bgcolor: '#97efe9' }}></Avatar>
      <UserEmail>Welcome, {user.name}</UserEmail>
      <StyledNavLink to="/" onClick={handleLogOut}>
        Log Out
      </StyledNavLink>
    </UserContainer>
  );
}
