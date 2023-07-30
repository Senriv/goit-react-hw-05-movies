import styled from '@emotion/styled';

export const Btn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #0056b3;
  }
`;
