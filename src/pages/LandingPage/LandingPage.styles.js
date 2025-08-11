import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.xxxLarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const RareComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px; /* Limit width for better presentation */
  width: 100%;
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
