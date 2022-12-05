import styled from "styled-components";
import { HiTrash } from "react-icons/hi";

export const TaskContainer = styled.div`
  height: 50px;
  width: 400px;
  margin: 5px;
  display: flex;
  border-radius: 20px;
  font-weight: 600;
  justify-content: space-between;
  background-color: ${(props) => props.theme.highlight};
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TaskText = styled.p`
  font-size: 15px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.background};
`;

export const Trash = styled(HiTrash)`
  margin: 5px;
  font-size: 22px;
  color: ${(props) => props.theme.background};
  cursor: pointer;
`;
