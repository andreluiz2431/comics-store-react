import React from 'react';
import { StyledButton } from './Button.styles.js';

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;