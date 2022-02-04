import React, { useState, useRef, useEffect } from "react";
import "./Fold.css";
import { SwiperCarousel } from "../Swiper/Swiper";

export const Fold = ({ text, gallery, link, caption, link2 }) => {
  const centerContent = useRef();
  const centerFold = useRef();
  const [selectedImg, setSelectedImg] = useState(0);

  const handleSelectImgNext = () =>
    setSelectedImg((prevState) => prevState + 1);
  const handleSelectImgPrev = () =>
    setSelectedImg((prevState) => prevState - 1);

  useEffect(() => {
    const foldsContent = Array.from(
      document.getElementsByClassName("fold-content")
    );

    let targetScroll = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    let currentScroll = targetScroll;
    let tick = () => {
      let overflowHeight =
        centerContent.current.clientHeight - centerFold.current.clientHeight;

      document.body.style.height = overflowHeight + window.innerHeight + "px";

      targetScroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      currentScroll += (targetScroll - currentScroll) * 0.1;
      foldsContent.forEach((content) => {
        content.style.transform = `translateY(${currentScroll}px)`;
      });
      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.body.style.height = "100%";
    };
  }, [centerContent, centerFold]);

  return (
    <main className="wrapper">
      <div className="screen" id="fold-effect">
        <div className="wrapper-3d">
          <div className="fold fold-top">
            <div className="fold-align">
              <div className="fold-content">
                {text}
                {link}
                <SwiperCarousel
                  gallery={gallery}
                  selectedImg={selectedImg}
                  handleSelectImgNext={handleSelectImgNext}
                  handleSelectImgPrev={handleSelectImgPrev}
                />
                {caption}
                {link2}
              </div>
            </div>
          </div>
          <div className="fold fold-center" id="center-fold" ref={centerFold}>
            <div className="fold-align">
              <div
                className="fold-content"
                id="center-content"
                ref={centerContent}
              >
                {text}
                {link}
                <SwiperCarousel
                  gallery={gallery}
                  handleSelectImgNext={handleSelectImgNext}
                  handleSelectImgPrev={handleSelectImgPrev}
                />
                {caption}
                {link2}
              </div>
            </div>
          </div>
          <div className="fold fold-bottom">
            <div className="fold-align">
              <div className="fold-content">
                {text}
                {link}
                <SwiperCarousel
                  gallery={gallery}
                  selectedImg={selectedImg}
                  handleSelectImgNext={handleSelectImgNext}
                  handleSelectImgPrev={handleSelectImgPrev}
                />
                {caption}
                {link2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
