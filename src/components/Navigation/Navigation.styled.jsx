import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    & {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;

  &.active {
    color: yellow;
  }

  &:hover {
    background-color: #0056b3;
  }
`;
