import React from "react";
import { Center } from "../../styles";
import {
  Container,
  ExhibitContainer,
  MainImage,
  Name,
} from "./ExhibitionStyles";
import { Link } from "react-router-dom";

const Exhibits = ({ exhibitionData }) => {
  return (
    <Container>
      <Center>
        {exhibitionData.map((exhibit, i) => (
          <ExhibitContainer key={i}>
            <Link to={`/exhibition/${exhibit.id}`} className="pointer">
              <MainImage src={exhibit.image} className="pointer" />
              <Name className="pointer">{exhibit.artName} </Name>
              <Name>
                <i className="pointer">{exhibit.artistName}</i>
              </Name>
            </Link>
          </ExhibitContainer>
        ))}
      </Center>
    </Container>
  );
};

export default Exhibits;
