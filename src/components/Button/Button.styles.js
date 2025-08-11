import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;