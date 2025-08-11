import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fonts.sizes.xxLarge};
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fonts.sizes.xLarge};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;

export const MainContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on tablet */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr); /* 5 columns on desktop */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    grid-template-columns: repeat(6, 1fr); /* 6 columns on large desktop */
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;

  button {
    margin: 0 ${({ theme }) => theme.spacing.sm};
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:disabled {
      background-color: ${({ theme }) => theme.colors.textSecondary};
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;