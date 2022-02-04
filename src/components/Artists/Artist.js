import React from "react";
import { ArtistItem, LinkArrow } from "./ArtistsStyles";
import { Arrow } from "../../assets/icons";

export const Artist = ({ item }) => {
  return (
    <>
      <ArtistItem>
        <a href={item.portfolio} target="_blank" className="pointer">
          {item.name}
          <LinkArrow>
            <Arrow height=".6em" width=".6em" />
          </LinkArrow>
        </a>
        {item.img && <img src={item.img} className="pointer" />}
      </ArtistItem>
    </>
  );
};
