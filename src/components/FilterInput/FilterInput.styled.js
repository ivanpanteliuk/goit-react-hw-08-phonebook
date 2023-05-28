import styled from '@emotion/styled';

export const Input = styled.input`
  border: 1px solid
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  height: 56px;
`;

export const Label = styled.div`
  width: 445px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;

  // background: rgb(217, 176, 94);
  // background: linear-gradient(
  //   90deg,
  //   rgba(217, 176, 94, 1) 0%,
  //   rgba(71, 43, 1, 1) 100%
  // );
  box-shadow: 0 0 5px rgba(61, 232, 232, 0.6) inset,
    0 0 10px 2px rgba(90, 205, 174, 0.5) inset,
    0 0 15px 4px rgba(45, 114, 185, 0.4) inset,
    5px 5px 5px rgba(96, 190, 181, 0.2);
`;
