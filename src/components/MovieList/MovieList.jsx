import PropTypes from 'prop-types';
import { List, Item, ItemLink, BtnWrapper } from './MovieList.styled';
import Button from '../Button/Button';

const MovieList = ({
  location,
  movieList,
  paginationPage,
  totalPages,
  onLoadNextPage,
  onLoadPreviousPage,
  onToStartPage,
}) => {
  return (
    <>
      <List>
        {movieList.map(({ id, title }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </ItemLink>
          </Item>
        ))}
      </List>
      <BtnWrapper>
        {movieList.length !== 0 && paginationPage > 1 && (
          <>
            <Button btnName={'Start page'} onClick={onToStartPage} />
            <Button btnName={'Previous page'} onClick={onLoadPreviousPage} />
          </>
        )}
        {movieList.length !== 0 && paginationPage < totalPages && (
          <Button btnName={'Next page'} onClick={onLoadNextPage} />
        )}
      </BtnWrapper>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  location: PropTypes.object.isRequired,
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  paginationPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onLoadPreviousPage: PropTypes.func.isRequired,
  onToStartPage: PropTypes.func.isRequired,
};
