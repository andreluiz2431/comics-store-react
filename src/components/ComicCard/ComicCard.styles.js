import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  overflow: hidden; /* Ensure content doesn't spill */
  aspect-ratio: 2 / 3; /* Enforce consistent aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align title to bottom */

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
    border: 2px solid ${({ theme }) => theme.colors.accent}; /* Highlight on hover */
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%; /* Fill the container */
  object-fit: cover; /* Cover the area, cropping if necessary */
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${({ theme }) => theme.transition};
`;

export const ComicTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  text-align: left;
  z-index: 1; /* Ensure title is above image on hover */
`;

export const RareBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xs};
  right: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.rareComic};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-transform: uppercase;
  z-index: 1; /* Ensure badge is above image */
`;