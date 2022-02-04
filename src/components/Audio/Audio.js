import React from "react";
import { Center } from "../../styles";
import {
  Container,
  AudioContainer,
  BorderContainer,
  Zitat,
} from "./AudioStyles";
import { Link } from "react-router-dom";

const Audios = ({ audioData }) => {
  return (
    <Container>
      <Center>
        {audioData.map((audio, i) => (
          <AudioContainer key={i}>
            <Link to={`/messages/${i + 1}`} className="pointer">
              <BorderContainer className="pointer">
                <Zitat className="pointer">{audio.zitat}</Zitat>
              </BorderContainer>
            </Link>
          </AudioContainer>
        ))}
      </Center>
    </Container>
  );
};

export default Audios;
