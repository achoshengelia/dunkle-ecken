import React from "react";
import { Link } from "react-router-dom";
import { Center } from "../../styles";
import {
  RadioContainer,
  Player,
  Controler,
  Play,
  Bar,
  Progress,
  Current,
  Radio,
  Percentage,
} from "./RadioStyles";

export const RadioButton = ({ audio }) => {
  return (
    <RadioContainer>
      <audio src={audio.url} type={audio.type}></audio>
      <Radio>
        <Controler>
          <Play></Play>
        </Controler>
        <Progress>
          <Bar>
            <Percentage></Percentage>
          </Bar>
        </Progress>
        <Current>0:00</Current>
      </Radio>
    </RadioContainer>
  );
};
