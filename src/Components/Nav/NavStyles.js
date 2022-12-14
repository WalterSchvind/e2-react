import styled from "styled-components";
import { StyledLink } from "../Global/Global";

export const Navbar = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.highlight};
`;

export const NavContainer = styled.nav`
  height: 100%;
  width: 90%;
  max-width: 1300px;
  gap: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavDivisor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavStyledLink = styled(StyledLink)`
  font-weight: 500;
  font-size: 20px;
  transition: all 0.5s 0s ease;
  &:hover {
    font-weight: 700;
    transform: scale(1.15);
  }
`;
