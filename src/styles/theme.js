const theme = {
  colors: {
    primary: '#040714', // Dark background
    secondary: '#1A1D29', // Slightly lighter dark for cards/sections
    textPrimary: '#F9F9F9', // Light text
    textSecondary: '#A0A0A0', // Lighter gray text
    accent: '#0072D2', // Bright blue for highlights/buttons
    accentHover: '#0092FF', // Lighter blue on hover
    rareComic: '#FFD700', // Gold for rare comics
    error: '#FF4D4D', // Red for errors
    success: '#4CAF50', // Green for success
  },
  fonts: {
    family: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    sizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xLarge: '1.5rem',
      xxLarge: '2rem',
      xxxLarge: '3rem',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
};

export default theme;