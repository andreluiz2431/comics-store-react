import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xLarge};
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.xxLarge};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};
    margin-top: ${({ theme }) => theme.spacing.md};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;