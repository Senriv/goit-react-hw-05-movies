import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  display: block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;

export const PosterImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 5px;
  width: 300px;
`;

export const Inner = styled.div`
  padding: 10px;
`;

export const FilmTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const OwerviewTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const OwerviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

export const GenresTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

export const GenresText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  margin-top: 30px;
`;

export const LinkSub = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LinkItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 5px;
`;

export const LinkLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
