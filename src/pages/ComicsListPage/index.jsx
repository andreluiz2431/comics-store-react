import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComics } from '../../store/comicsSlice';
import ComicCard from '../../components/ComicCard';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/Spinner';
import {
  Header,
  MainContent,
  ComicsGrid,
  PaginationContainer,
  SearchInput,
} from './ComicsListPage.styles.js';

const ComicsListPage = () => {
  const dispatch = useDispatch();
  const { comicsList, status, pagination } = useSelector((state) => state.comics);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedComic, setSelectedComic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Fetch comics when pagination, search term, or filter type changes
  useEffect(() => {
    dispatch(fetchComics({
      limit: pagination.limit,
      offset: pagination.offset,
      searchTerm: debouncedSearchTerm,
      filterType: filterType,
    }));
  }, [dispatch, pagination.limit, pagination.offset, debouncedSearchTerm, filterType]);

  // Reset offset when search term or filter type changes
  useEffect(() => {
    if (pagination.offset !== 0) {
      dispatch(fetchComics({ limit: pagination.limit, offset: 0, searchTerm: debouncedSearchTerm, filterType: filterType }));
    }
  }, [debouncedSearchTerm, filterType]);

  const handleNextPage = () => {
    const { limit, offset, total } = pagination;
    if (offset + limit < total) {
      dispatch(fetchComics({ limit, offset: offset + limit, searchTerm: debouncedSearchTerm, filterType: filterType }));
    }
  };

  const handlePreviousPage = () => {
    const { limit, offset } = pagination;
    if (offset > 0) {
      dispatch(fetchComics({ limit, offset: offset - limit, searchTerm: debouncedSearchTerm, filterType: filterType }));
    }
  };

  const handleComicCardClick = (comic) => {
    setSelectedComic(comic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedComic(null);
  };

  return (
    <div>
      <MainContent>
        <SearchInput
          type="text"
          placeholder="Search comics by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Options */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          {/* <FilterDropdown filterType={filterType} setFilterType={setFilterType} /> */}
        </div>

        {status === 'loading' && <LoadingSpinner />}
        <ComicsGrid>
          {comicsList.map((comic) => (
            <ComicCard key={comic.id} comic={comic} onClick={handleComicCardClick} /> 
          ))}
        </ComicsGrid>
        <PaginationContainer>
          <button onClick={handlePreviousPage} disabled={pagination.offset === 0}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={pagination.offset + pagination.count >= pagination.total}>
            Next
          </button>
        </PaginationContainer>
      </MainContent>

      {/* {isModalOpen && selectedComic && (
        <ComicDetailModal comic={selectedComic} onClose={handleCloseModal} />
      )} */}
    </div>
  );
};

export default ComicsListPage;