import { Header, NavItems, NavItem, NavLinks } from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <nav>
        <NavItems>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/movies">Movies</NavLinks>
          </NavItem>
        </NavItems>
      </nav>
    </Header>
  );
};

export default Navigation;
