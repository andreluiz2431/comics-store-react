import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.sizes.xLarge};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  position: relative; /* For positioning the bubble */

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
  }
`;