import { useEffect, useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchData } from '../services/themoviedb-api';
import Notiflix from 'notiflix';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Wrapper } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState(
    searchParams.get('search') ?? ''
  );
  const totalPages = useRef(0);

  let paginationPage = Number(searchParams.get('page')) ?? 0;
  let title = '';

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/search/movie`, paginationPage, searchText).then(r => {
      if (r.status !== 200) {
        throw new Error(r.statusText);
      } else {
        totalPages.current = r.data.total_pages;
        setMovieList(r.data.results);
        setIsLoading(false);
      }
    });
  }, [paginationPage, searchText]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target[0].value.trim();
    if (!searchValue) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    }
    paginationPage = 1;
    let localValue = searchParams.get('search');
    setSearchParams({ search: localValue.trim(), page: 1 });
    setSearchText(localValue.trim());
  };

  const handleSearchInputChange = ({ target: { value } }) => {
    setSearchParams({ search: value, page: paginationPage });
  };

  const onLoadNextPage = () => {
    paginationPage = paginationPage + 1;
    setSearchParams({ search: searchText, page: paginationPage });
  };

  const onLoadPreviousPage = () => {
    paginationPage = paginationPage - 1;
    setSearchParams({ search: searchText, page: paginationPage });
  };

  const onToStartPage = () => {
    paginationPage = 1;
    setSearchParams({ search: searchText, page: 1 });
  };

  if (movieList.length === 0) {
    title = 'No matches';
  } else {
    title = `Search "${searchText}" (Page ${paginationPage} of ${totalPages.current})`;
  }

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Search
        handleSubmit={handleSubmit}
        handleSearchInputChange={handleSearchInputChange}
        searchText={searchParams.get('search') ?? ''}
      />
      {searchText && <h3>{title}</h3>}
      {movieList.length !== 0 && (
        <MovieList
          location={location}
          movieList={movieList}
          paginationPage={paginationPage}
          totalPages={totalPages.current}
          onLoadNextPage={onLoadNextPage}
          onLoadPreviousPage={onLoadPreviousPage}
          onToStartPage={onToStartPage}
        />
      )}
    </Wrapper>
  );
};

export default Movies;
