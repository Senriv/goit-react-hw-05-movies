import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;

export const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Items = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

export const ItemImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 5px;
  width: 180px;
  height: 270px;
`;

export const ItemName = styled.h5`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ItemDesc = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;
