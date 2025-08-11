import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px; /* Adjust as needed */
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3); /* Light border */
  border-top: 4px solid ${({ theme }) => theme.colors.accent}; /* Accent color for top */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;