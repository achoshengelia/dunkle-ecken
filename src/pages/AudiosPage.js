import React from "react";
import Audios from "../components/Audio/Audio";
import { audioIT, audioDE } from "../data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const AudiosPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  if (i18n.language === "en") {
    navigate("/");
  } else if (i18n.language === "de") {
    return <Audios audioData={audioDE} />;
  } else {
    return <Audios audioData={audioIT} />;
  }
};

// export default AudioPage;
