import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/themoviedb-api';
import Loader from 'components/Loader/Loader';
import {
  Wrapper,
  Title,
  Items,
  Item,
  ItemName,
  ItemText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieRevews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/movie/${movieId}/reviews`, 0, '').then(r => {
      if (r.status !== 200) {
        throw new Error(r.statusText);
      } else {
        setMovieReviews(r.data.results);
        setIsLoading(false);
      }
    });
  }, [movieId]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {movieRevews.length === 0 ? (
        <Title>We don't have any reviews for this movie.</Title>
      ) : (
        <Title>Reviews</Title>
      )}
      {movieRevews.length && (
        <Items>
          {movieRevews.map(({ id, author, content }) => (
            <Item key={id}>
              <ItemName>Author: {author}</ItemName>
              <ItemText>{content}</ItemText>
            </Item>
          ))}
        </Items>
      )}
    </Wrapper>
  );
};

export default Reviews;
