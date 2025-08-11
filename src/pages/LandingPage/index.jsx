import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComics } from '../../store/comicsSlice';
import ComicCard from '../../components/ComicCard';
import LoadingSpinner from '../../components/Spinner';
import {
  LandingPageContainer,
  Title,
  Subtitle,
  RareComicsGrid,
  StyledLink,
} from './LandingPage.styles.js';

const LandingPage = () => {
  const dispatch = useDispatch();
  const { comicsList, status } = useSelector((state) => state.comics);
  const [randomRareComics, setRandomRareComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle' || status === 'succeeded') {
      dispatch(fetchComics({ limit: 100, offset: 0 }));
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (comicsList.length > 0) {
      const rareComics = comicsList.filter((comic) => comic.isRare);
      if (rareComics.length > 0) {
        const shuffled = [...rareComics].sort(() => 0.5 - Math.random());
        setRandomRareComics(shuffled.slice(0, 5));
      }
    }
  }, [comicsList]);

  const handleComicCardClick = (comic) => {
    setSelectedComic(comic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedComic(null);
  };

  return (
    <LandingPageContainer>
      <Title>Welcome to Marvel Comics Store</Title>
      <Subtitle>Discover rare and exciting comics!</Subtitle>
      {status === 'loading' && comicsList.length === 0 && <LoadingSpinner />}
      {randomRareComics.length > 0 && (
        <RareComicsGrid>
          {randomRareComics.map((comic) => (
            <div key={comic.id} onClick={() => handleComicCardClick(comic)} style={{ cursor: 'pointer' }}>
              <ComicCard comic={comic} />
            </div>
          ))}
        </RareComicsGrid>
      )}
      <StyledLink to="/comics">Explore All Comics</StyledLink>

      {/* {isModalOpen && selectedComic && (
        <ComicDetailModal comic={selectedComic} onClose={handleCloseModal} />
      )} */}
    </LandingPageContainer>
  );
};

export default LandingPage;
