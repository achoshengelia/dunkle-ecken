import React from "react";
import { Link } from "react-router-dom";
import { Center } from "../../styles";
import {
  Description,
  IdContainer,
  Image,
  Name,
  NamesContainer,
  TextContainer,
  Name2,
} from "./ExhibitionStyles";

const Exhibit = ({ exhibit }) => {
  return (
    <IdContainer>
      <Center>
        <div>
          <Image src={exhibit.image} />
          <TextContainer>
            <NamesContainer>
              <Name>{exhibit.artName} </Name>
              <Name>
                <i>{exhibit.artistName}</i>
              </Name>
              <Name2>{exhibit.info}</Name2>
              <Name2>
                <a
                  href={exhibit.externalLink}
                  target="_blank"
                  className="pointer"
                >
                  {exhibit.linkName}
                </a>
              </Name2>
            </NamesContainer>
            <Description>{exhibit.description}</Description>
          </TextContainer>
        </div>
      </Center>
    </IdContainer>
  );
};

export default Exhibit;
