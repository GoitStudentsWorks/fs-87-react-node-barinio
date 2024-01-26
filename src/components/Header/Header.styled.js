import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;

export const PrivatNav = styled.div``;

export const HeaderContainer = styled.div`
  margin: auto;
  padding: 8px 20px 0;

  nav {
    display: flex;
    justify-content: space-between;
    color: var(--primery-color-blue);
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 16px 32px 0;
  }
  @media (min-width: 1440px) {
    padding: 12px 112px 0;
  }
`;

export const NavLinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;

  span {
    width: 58px;
  }
`;

export const NavLinkSignin = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.25;
`;

export const UserSvg = styled.svg`
  fill: none;
  stroke: var(--primery-color-black);
`;