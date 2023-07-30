import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/themoviedb-api';
import Loader from 'components/Loader/Loader';
import plugImg from '../../images/plug.jpg';
import {
  Wrapper,
  Title,
  Items,
  Item,
  ItemImg,
  ItemName,
  ItemDesc,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/movie/${movieId}/credits`, 0, '').then(r => {
      setIsLoading(false);
      if (r.status !== 200) {
        throw new Error(r.statusText);
      } else {
        setMovieCast(r.data.cast);
        setIsLoading(false);
      }
    });
  }, [movieId]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {movieCast.length === 0 ? <Title>No cast</Title> : <Title>Cast</Title>}
      {movieCast.length && (
        <Items>
          {movieCast.map(({ character, id, name, profile_path }) => (
            <Item key={id}>
              {profile_path ? (
                <ItemImg
                  src={profile_path ? BASE_IMAGE_URL + profile_path : plugImg}
                  alt={name}
                />
              ) : (
                <ItemImg src={plugImg} alt="Cast actor (no poster)" />
              )}
              <ItemName>{name}</ItemName>
              <ItemDesc>Caracter: {character}</ItemDesc>
            </Item>
          ))}
        </Items>
      )}
    </Wrapper>
  );
};
export default Cast;
