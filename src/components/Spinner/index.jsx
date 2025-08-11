import React from 'react';
import { SpinnerContainer, Spinner } from './Spinner.styles.js';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;