import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  display: block;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #eaf2ff;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
