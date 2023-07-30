import { useEffect, useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchData } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const totalPages = useRef(0);
  const [isLoading, setIsLoading] = useState(false);

  let paginationPage = Number(searchParams.get('page'));
  if (paginationPage === 0) {
    paginationPage = 1;
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/trending/movie/week`, paginationPage).then(r => {
      if (r.status !== 200) {
        throw new Error(r.statusText);
      } else {
        totalPages.current = r.data.total_pages;
        setMovieList(r.data.results);
        setIsLoading(false);
      }
    });
  }, [paginationPage]);

  const onLoadNextPage = () => {
    paginationPage = paginationPage + 1;
    setSearchParams({ page: paginationPage });
  };

  const onLoadPreviousPage = () => {
    paginationPage = paginationPage - 1;
    setSearchParams({ page: paginationPage });
  };

  const onToStartPage = () => {
    paginationPage = 1;
    setSearchParams({ page: paginationPage });
  };

  return (
    <div>
      {isLoading && <Loader />}
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
    </div>
  );
};

export default Home;
