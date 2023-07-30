import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './Search.styled';

const Search = ({ handleSubmit, handleSearchInputChange, searchText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <FormInput
          value={searchText}
          name="search"
          type="text"
          onChange={handleSearchInputChange}
          autoComplete="off"
        />
      </FormLabel>
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
