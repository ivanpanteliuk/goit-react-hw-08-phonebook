import { StyledNavLink } from 'components/AppBar/AppBar.styled';

export default function AuthNav() {
  return (
    <>
      <StyledNavLink to="/signup">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </>
  );
}
