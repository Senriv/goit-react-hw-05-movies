import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-block;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
`;

export const FormBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
