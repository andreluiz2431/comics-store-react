import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fonts.sizes.xxLarge};
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fonts.sizes.xLarge};
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxs};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  input[type="number"] {
    width: 60px;
    padding: ${({ theme }) => theme.spacing.xxs};
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  button {
    background-color: ${({ theme }) => theme.colors.error}; /* Red for remove */
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const CouponSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};

  input {
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const TotalsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};

  h2 {
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textPrimary};

    &.discount {
      color: ${({ theme }) => theme.colors.success}; /* Green for discount */
    }

    &.final-total {
      font-weight: ${({ theme }) => theme.fonts.weights.bold};
      font-size: ${({ theme }) => theme.fonts.sizes.xLarge};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;