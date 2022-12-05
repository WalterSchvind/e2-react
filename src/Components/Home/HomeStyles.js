import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const ButtonWithoutTask = styled.button`
  width: 250px;
  height: 80px;
  background-color: ${(props) => props.theme.highlight};
  font-size: 22px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.5s 0s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
export const ButtonWithTask = styled.button`
  width: 250px;
  height: 280px;
  background-color: ${(props) => props.theme.tertiary};
  font-size: 22px;
  border-radius: 100px;
  border: none;
  transition: all 0.5s 0s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`;
