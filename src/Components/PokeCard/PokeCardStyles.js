import styled from "styled-components";

export const PokemonContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.highlight};
`;

export const DataContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const PokeImg = styled.img`
  width: 200px;
  align-items: center;
  height: auto;
`;

export const PokeName = styled.h3`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;
