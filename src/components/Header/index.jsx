import React from 'react';
import { NavContainer, Logo, NavLinks, NavLink } from './Header.styles.js';

const Header = () => {
  return (
    <NavContainer>
      <Logo to="/">Marvel Comics Store</Logo>
      <NavLinks>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Header;