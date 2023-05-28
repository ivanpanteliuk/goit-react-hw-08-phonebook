import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 30px;
  width: 445px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #292929;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #cf2e2e;
  }
`;
