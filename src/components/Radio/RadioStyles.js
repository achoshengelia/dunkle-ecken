import styled from "styled-components";
import { Center } from "../../styles";

export const AudioContainer = styled.div`
  /* max-width: 100rem; */
  height: max-content;

  &:not(:last-child) {
    margin-bottom: 1em;
  }
  &:hover {
    cursor: crosshair;
    opacity: 0.7;
    background: ${(props) => props.theme.colors.primaryYellow};
    transform: scale(1.01);
    color: black;
  }
`;

export const RadioContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 13vh;
  max-height: 15vh;

  width: 100%;
  background-color: black;
  z-index: 100;
`;

export const Player = styled.div`
  width: 100%;
`;

export const Controler = styled.div``;

export const Play = styled.button`
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  background: url("https://img.icons8.com/ios-filled/100/ffffff/play--v1.png")
    no-repeat center;
  opacity: 100%;
  background-size: contain;

  &:hover {
    -webkit-filter: sepia(40%) hue-rotate(23deg) saturate(390%);
    filter: sepia(1000%) hue-rotate(23deg) saturate(790%);
  }

  &.pause {
    background: url("https://icons8.com/icon/9987/pause") no-repeat center;
    background-size: contain;
  }
`;

export const Progress = styled.div`
  position: relative;
  width: 75%;
  margin: 0 5px;
  height: 10px;
`;

export const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 0.1px solid white;
`;

export const Percentage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryYellow};
`;

export const Current = styled.div``;

export const Radio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 13vh;
  min-height: 5vh;
  margin: 3%;
  padding: 1rem;
  border: solid 2px white;
  margin-top: 0rem;
`;
