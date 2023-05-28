import {
  Header,
  Logo,
  LogoWrapper,
  Nav,
  StyledNavLink,
  Wrapper,
} from './AppBar.styled';
import { Container } from 'components/App/App.styled';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks/useAuth';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Nav>
          <LogoWrapper>
            <Logo to="/">PhoneBook</Logo>
            {isLoggedIn && (
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            )}
          </LogoWrapper>
          <Wrapper>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Wrapper>
        </Nav>
      </Container>
    </Header>
  );
}
