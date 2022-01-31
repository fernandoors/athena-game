import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px 20px;
  text-align: center;
  border: 1px solid;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 0px 3px 3px rgb(102, 102, 255);
  background-color: rgba(102, 102, 255, 0.3);
  color: ${({ color }) => color || '#fff'};
  &:hover {
    opacity: 0.5;
  }
`
