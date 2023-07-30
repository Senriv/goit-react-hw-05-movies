import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchData } from '../services/themoviedb-api';
import Loader from 'components/Loader/Loader';
import plugImg from '../images/plug.jpg';
import {
  LinkBack,
  Wrapper,
  PosterImg,
  Inner,
  FilmTitle,
  UserScore,
  OwerviewTitle,
  OwerviewText,
  GenresTitle,
  GenresText,
  LinkWrapper,
  LinkSub,
  LinkItems,
  LinkItem,
  LinkLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const BASE_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/movie/${movieId}`, 0, '').then(r => {
      setIsLoading(false);
      if (r.status !== 200) {
        throw new Error(r.statusText);
      } else {
        setMovieData(r.data);
        setIsLoading(false);
      }
    });
  }, [movieId]);

  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movieData;

  const userScr = ((vote_average / 10) * 100).toFixed(0);

  const pathToPoster = BASE_IMAGE_ENDPOINT + poster_path;
  const imgSrc = poster_path ? pathToPoster : plugImg;

  return (
    <>
      {isLoading && <Loader />}
      <LinkBack to={backLink}>&#8592; Go back</LinkBack>
      <Wrapper>
        <PosterImg src={imgSrc} alt="Poster" />
        <Inner>
          <FilmTitle>
            {original_title} ({release_date && release_date.slice(0, 4)})
          </FilmTitle>
          <UserScore>User Score: {userScr}%</UserScore>
          <OwerviewTitle>Owerview</OwerviewTitle>
          <OwerviewText>{overview}</OwerviewText>
          <GenresTitle>Genres</GenresTitle>
          {genres && (
            <GenresText>
              {genres.map(({ name }) => name).join(',  ')}
            </GenresText>
          )}
        </Inner>
      </Wrapper>
      <LinkWrapper>
        <LinkSub>Additional information</LinkSub>
        <LinkItems>
          <LinkItem>
            <LinkLink to="cast" state={location.state}>
              Cast
            </LinkLink>
          </LinkItem>
          <LinkItem>
            <LinkLink to="reviews" state={location.state}>
              Reviews
            </LinkLink>
          </LinkItem>
        </LinkItems>
      </LinkWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
