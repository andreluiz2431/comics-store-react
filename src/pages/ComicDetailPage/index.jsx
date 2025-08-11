import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComicById } from '../../store/comicsSlice';
import { addItem } from '../../store/cartSlice';
import LoadingSpinner from '../../components/Spinner';
import {
  DetailContainer,
  ComicImage,
  ComicInfo,
} from './ComicDetailPage.styles.js';

const ComicDetailPage = () => {
  const { comicId } = useParams();
  const dispatch = useDispatch();
  const { selectedComic, status, error } = useSelector((state) => state.comics);

  useEffect(() => {
    if (comicId) {
      dispatch(fetchComicById(Number(comicId)));
    }
  }, [comicId, dispatch]);

  const handleAddToCart = () => {
    if (selectedComic) {
      dispatch(addItem(selectedComic));
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedComic) {
    return <div>Comic not found.</div>;
  }

  const price = selectedComic.prices?.find(p => p.type === 'printPrice')?.price || 19.99;

  return (
    <DetailContainer>
      <ComicImage src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`} alt={selectedComic.title} />
      <ComicInfo>
        <h1>{selectedComic.title}</h1>
        <p>{selectedComic.description || 'No description available.'}</p>
        <h2>Price: ${price}</h2>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </ComicInfo>
    </DetailContainer>
  );
};

export default ComicDetailPage;