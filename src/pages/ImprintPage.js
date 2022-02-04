import React from "react";
import { Legalinfo } from "../components/Legalinfo/Legalinfo";
import { useTranslation } from "react-i18next";

export const ImprintPage = () => {
  const { t } = useTranslation();

  const text = (
    <>
      <h1>{t("imprint.text.paragraph1")}</h1>
      <h2>{t("imprint.text.paragraph2")}</h2>
      <p>
        Manuel Ahnemüller, Dovilé Aleksaité, Valentina Alexander, Elias Asisi,
        Fiona Belousz, Winona Bogner, Elisa Jule Braun, Hilka Dirks Alessandra
        Fochesato, Indra L. Frings, Hannah Füsser, Zora Hünermann, Manfred Elias
        Knorr, Sophie Lazari, Ting Lui, Montau, Isabelle Östlund, Raphael Pohl,
        David Reitenbach, Merani Schilcher, Daniela Schaller, Meret Schmiese,
        Carolina Stieler, Lukas Winter, Franziska Ziegler
      </p>
      <br />
      <br />
      <h2>Copyright </h2>
      <p>{t("imprint.text.paragraph3")}</p>
      <p>{t("imprint.text.paragraph4")}</p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph5")}</h2>
      <p>Annika Terwey, Sophie Lazari</p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph6")}</h2>
      <p>{t("imprint.text.paragraph7")}</p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph8")}</h2>
      <p>Judith Rubatscher, Annika Terwey</p>
      <br />
      <br />
      <h2>SüdtirolKultur</h2>
      <p>
        Via Andreas Hofer 30 <br />
        39011 Lana (BZ) <br />
        Cod. Fisc. 91044460219 <br />
        part. Iva 02574470213 <br />
        info(at)lanalive.it
      </p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph9")}</h2>
      <p>{t("imprint.text.paragraph10")}</p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph11")}</h2>
      <p>{t("imprint.text.paragraph12")}</p>
      <br />
      <br />
      <h2>{t("imprint.text.paragraph13")}</h2>
      <p>{t("imprint.text.paragraph14")}</p>
      <p>
        <a
          href="https://github.com/Anemolo/FoldingDOM"
          target="_blank"
          className="pointer"
        >
          {t("imprint.text.paragraph15")}
        </a>
      </p>
      <br />
    </>
  );

  return <Legalinfo text={text} />;
};
