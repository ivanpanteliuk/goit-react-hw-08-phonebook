import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #0b4f6c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Logo = styled(NavLink)`
  margin-right: 45px;
  font-size: 50px;
  font-family: 'Caveat';
  text-decoration: none;
  text-shadow: 4px 4px 8px rgba(151, 239, 233, 0.5);
  color: #97efe9;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #2bded2;
    text-shadow: 8px 8px 16px rgba(30, 194, 183, 0.5);
    transform: scale(1.1);
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 25px;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &:hover {
    color: #97efe9;
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }

  &.active {
    background-color: #97efe9;
    color: #171c28;
  }

  &.active:hover {
    color: #fff;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
