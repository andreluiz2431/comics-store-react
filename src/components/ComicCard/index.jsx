import React from 'react';
import {
  CardContainer,
  ComicImage,
  ComicTitle,
  RareBadge,
} from './ComicCard.styles.js';

const ComicCard = ({ comic, onClick }) => {
  return (
    <CardContainer data-cy="comic-card" onClick={() => onClick(comic)}>
      {comic.isRare && <RareBadge data-cy="rare-badge">Rare</RareBadge>}
      <ComicImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <ComicTitle>{comic.title}</ComicTitle>
    </CardContainer>
  );
};

export default ComicCard;