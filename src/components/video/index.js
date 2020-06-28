import React, { useEffect } from "react";
import styled from "styled-components";

const VideoPlay = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  padding: 56.25% 0 0 0;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  z-index: 1;
  margin-bottom: 0;
  border-radius: 12px;
`;

const VideoWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  z-index: 1;
  margin-bottom: 0;
  border-radius: 12px;
`;

const VideoFoam = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  z-index: 1;
  margin-bottom: 0;
  border-radius: 12px;
`;

const EmbedVideo = ({ videoFoam }) => {
  useEffect(() => {
    if (videoFoam) {
      const jsonpScript = document.createElement("script");
      const ev1Script = document.createElement("script");

      jsonpScript.src = "https://fast.wistia.com/embed/medias/7ezo6pgzol.jsonp";
      jsonpScript.async = true;

      ev1Script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      ev1Script.async = true;

      document.body.appendChild(jsonpScript);
      document.body.appendChild(ev1Script);
    }
  }, [videoFoam]);

  return (
    <VideoPlay className="wistia_responsive_padding">
      <VideoWrapper className="wistia_responsive_wrapper">
        <VideoFoam className="wistia_embed wistia_async_7ezo6pgzol videoFoam=true">
          &nbsp;
        </VideoFoam>
      </VideoWrapper>
    </VideoPlay>
  );
};

export default EmbedVideo;
