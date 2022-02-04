import React from "react";
import { useParams } from "react-router-dom";
import Exhibit from "../components/Exhibition/Exhibit";
import { useTranslation } from "react-i18next";
import fiona from "../assets/ArtistsPictures/fiona.jpg";
import dovile from "../assets/ArtistsPictures/dovile.png";
import valentina from "../assets/ArtistsPictures/valentina.png";
import asisi from "../assets/ArtistsPictures/asisi.jpg";
import winona from "../assets/ArtistsPictures/winona.jpg";
import hilka from "../assets/ArtistsPictures/zora_hilka_meret.jpg";
import elisa from "../assets/ArtistsPictures/elisa.png";
import ale from "../assets/ArtistsPictures/alessandra.png";
import indra from "../assets/ArtistsPictures/indra.png";
import montau from "../assets/ArtistsPictures/montau.png";
import manfred from "../assets/ArtistsPictures/manfred.jpg";
import merani from "../assets/ArtistsPictures/merani.png";
import isa from "../assets/ArtistsPictures/isabelle.jpg";
import lukas from "../assets/ArtistsPictures/lukas.jpg";
import raphael from "../assets/ArtistsPictures/raphael.png";
import carolina from "../assets/ArtistsPictures/carolina.jpg";
import david from "../assets/ArtistsPictures/david.jpg";
// import isa2 from '../assets/ArtistsPictures/isabelle2.jpg';

const ExhibitPage = () => {
  const params = useParams();
  const { t, i18n } = useTranslation();

  const exhibitionData = [
    {
      id: "GroundStudies",
      artName: "Ground Studies",
      artistName: "Fiona Belousz",
      image: fiona,
      description: (
        <>
          {t("exhibitionData.fiona.description.paragraph1")}
          <br />
          <br />
          {t("exhibitionData.fiona.description.paragraph2")}
        </>
      ),
      info: (
        <>
          {t("exhibitionData.fiona.info.part1")}
          <br />
          {t("exhibitionData.fiona.info.part2")}
        </>
      ),
      externalLink: "",
      linkName: "",
    },
    {
      id: "unstable",
      artName: "un/stable",
      artistName: "Winona Bogner, Hannah Füsser, Ting Lui",
      image: winona,
      description: <>{t("exhibitionData.winona.description.paragraph1")}</>,
      info: `${t("exhibitionData.winona.info")}, 2019`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "ZwispaltConflict",
      artName: "Zwispalt (Conflict)",
      artistName: "David Reitenbach",
      image: david,
      description: "",
      info: "",
      externalLink: "",
      linkName: "",
    },
    {
      id: "ForyouCENSORED",
      artName: "For you CENSORED",
      artistName: "Raphael Pohl",
      image: raphael,
      description: (
        <>
          {t("exhibitionData.raphael.description.paragraph1")}
          <br /> <br /> {t("exhibitionData.raphael.description.paragraph2")}
          <br /> <br />
          {t("exhibitionData.raphael.description.paragraph3")}
          <br />
          <br />
          {t("exhibitionData.raphael.description.paragraph4")}
        </>
      ),
      info: (
        <>
          Video, 2:59, 2019 <br /> Sound design: Thomas Bua
        </>
      ),
      externalLink: 'https://vimeo.com/raphaelpohl"',
      linkName: `${t("exhibitionData.raphael.link")}`,
    },

    {
      id: "FügungAddendum",
      artName: "Fügung (Addendum)",
      artistName: "Lukas Winter",
      image: lukas,
      description: (
        <>
          {t("exhibitionData.lukas.description.paragraph1")}
          <br /> <br />
          {t("exhibitionData.lukas.description.paragraph2")}
          <br /> <br />
          {i18n.language === "en" || i18n.language === "de"
            ? t("exhibitionData.lukas.description.paragraph3")
            : null}
          <br />
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.lukas.description.paragraph3")
            : null}
        </>
      ),
      info: `${t("exhibitionData.lukas.info")}, 2019`,
      externalLink: "https://www.youtube.com/watch?v=4uEdfvQqYwk&ab_channel=AG",
      linkName: `${t("exhibitionData.lukas.link")}`,
    },
    {
      id: "DasletzteHemdhatkeineTaschen",
      artName: "Das letzte Hemd hat keine Taschen",
      artistName: "Elias Manfred Knorr",
      image: manfred,
      description: <>{t("exhibitionData.manfred.description")}</>,
      info: (
        <>
          {t("exhibitionData.manfred.info.part1")}
          <br />
          {t("exhibitionData.manfred.info.part2")}
        </>
      ),
      externalLink: "https://vimeo.com/341223793",
      linkName: `${t("exhibitionData.manfred.link")}`,
    },
    {
      id: "TheBlues",
      artName: "The Blues",
      artistName: "Isabelle Östlund",
      image: isa,
      description: (
        <>
          {t("exhibitionData.isa.description.paragraph1")}
          <br /> <br />
          {t("exhibitionData.isa.description.paragraph2")}
          <br /> <br />
          {t("exhibitionData.isa.description.paragraph3")}
          <br /> <br />
          {t("exhibitionData.isa.description.paragraph4")}
          <br />
          {t("exhibitionData.isa.description.paragraph5")}
          <br />
          {t("exhibitionData.isa.description.paragraph6")}
          <br />
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.isa.description.paragraph7")
            : null}
        </>
      ),
      info: `${t("exhibitionData.isa.info")}, 2020`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "BlackHole",
      artName: "Black Hole",
      artistName: "Elisa Jule Braun",
      image: elisa,
      description: <>{t("exhibitionData.elisa.description")}</>,
      info: "Video, 5:51, 2017",
      externalLink: "http://www.elisabraun.de/007_work.html",
      linkName: `${t("exhibitionData.elisa.link")}`,
    },
    {
      id: "Extractsfromthediary",
      artName: "Extracts from the diary",
      artistName: "Nia Lejander",
      image: fiona,
      description: (
        <>
          {t("exhibitionData.nia.description.paragraph1")}
          <br />
          <br />
          {t("exhibitionData.nia.description.paragraph2")}
        </>
      ),
      info: `${t("exhibitionData.nia.info")}, 2020`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "Brilliantfutureiswaitingforyou",
      artName: "Brilliant future is waiting for you",
      artistName: "Carole Stieler",
      image: carolina,
      description: <>{t("exhibitionData.carole.description")}</>,
      info: `${t("exhibitionData.carole.info")}, 2018`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "autoantibody",
      artName: "autoantibody.1 & autoantibody.2",
      artistName: "Merani Schilcher",
      image: merani,
      description: (
        <>
          {t("exhibitionData.merani.description.paragraph1")}
          <br />
          <br />
          {t("exhibitionData.merani.description.paragraph2")}
          <br />
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.merani.description.paragraph3")
            : null}
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.merani.description.paragraph4")
            : null}{" "}
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.merani.description.paragraph5")
            : null}{" "}
          <br />
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.merani.description.paragraph6")
            : null}
          <br />
          <br />
          {i18n.language === "en"
            ? t("exhibitionData.merani.description.paragraph7")
            : null}{" "}
        </>
      ),
      info: `${t("exhibitionData.merani.info")}, 2019/20`,
      externalLink: "https://vimeo.com/375293017",
      linkName: `${t("exhibitionData.merani.link")}`,
    },
    {
      id: "Sickofme",
      artName: "Sick (of) me",
      artistName: "Indra L. Frings",
      image: indra,
      description: (
        <>
          {t("exhibitionData.indra.description.paragraph1")}
          <br /> <br />
          {t("exhibitionData.indra.description.paragraph2")}
        </>
      ),
      info: "Facefilter, 2020",
      externalLink: "https://vimeo.com/393319001",
      linkName: `${t("exhibitionData.indra.link")}`,
    },
    {
      id: "Fourfacesoffear",
      artName: "Four faces of fear",
      artistName: "Dovilé Aleksaité",
      image: dovile,
      description: <>{t("exhibitionData.dovile.description")}</>,
      info: (
        <>
          {t("exhibitionData.dovile.info")} <br />
          Sound design: Christian Obermaier
        </>
      ),
      externalLink: "",
      linkName: "",
    },
    {
      id: "Senectus",
      artName: "Senectus",
      artistName: "Alessandra Fochesato",
      image: ale,
      description: (
        <>
          {t("exhibitionData.ale.description.paragraph1")}
          <em>{t("exhibitionData.ale.description.paragraph2")}</em>
          {t("exhibitionData.ale.description.paragraph3")} <br /> <br />
          {t("exhibitionData.ale.description.paragraph4")}
        </>
      ),
      info: "Video, 8:34 min, 2019",
      externalLink: "https://vimeo.com/296519893",
      linkName: `${t("exhibitionData.ale.link")}`,
    },
    {
      id: "Sink",
      artName: "Sink",
      artistName: "Valentina Alexander",
      image: valentina,
      description: (
        <>
          {t("exhibitionData.valentina.description.paragraph1")}
          <br />
          <br />
          {t("exhibitionData.valentina.description.paragraph2")}
        </>
      ),
      info: "Video, 1:00 min, 2018",
      externalLink: "https://vimeo.com/281239732",
      linkName: `${t("exhibitionData.valentina.link")}`,
    },
    {
      id: "Testingcollectivity",
      artName: "Testing collectivity",
      artistName: "Hilka Dirks, Zora Hünermann, Meret Schmiese",
      image: hilka,
      description: <>{t("exhibitionData.hilka.description")}</>,
      info: `${t("exhibitionData.hilka.info")}, 2019`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "REMUpgrade",
      artName: "REM-Upgrade",
      artistName: "Elias Asisi",
      image: asisi,
      description: (
        <>
          {t("exhibitionData.asisi.description.paragraph1")} <br />
          <br />
          {t("exhibitionData.asisi.description.paragraph2")}
        </>
      ),
      info: `${t("exhibitionData.asisi.info")}, 2018`,
      externalLink: "",
      linkName: "",
    },
    {
      id: "20200415",
      artName: "20200415",
      artistName: "Montau",
      image: montau,
      info: `${t("exhibitionData.montau.info")}, 2020`,
      description: (
        <>
          {t("exhibitionData.montau.description.paragraph1")}
          <em>{t("exhibitionData.montau.description.paragraph2")}</em>{" "}
          {t("exhibitionData.montau.description.paragraph3")} <br />
          <br />
          {t("exhibitionData.montau.description.paragraph4")}
        </>
      ),
      externalLink: "https://www.youtube.com/watch?v=_a47fSViL98",
      linkName: `${t("exhibitionData.montau.link")}`,
    },
  ];

  const [exhibit] = exhibitionData.filter((item) => item.id === params.artName);

  return <Exhibit exhibit={exhibit} />;
};

export default ExhibitPage;
