import { useState } from "react";
import ProtoTypes from "prop-types";
import { Box } from "@chakra-ui/react";
function Video({ videoSrc, bgImage }) {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      {playVideo && (
        <div style={{ zIndex: "999" }}>
          <div
            id="lightcase-overlay"
            style={{ opacity: "0.9", display: "block", cursor: "pointer" }}
          ></div>
          <div id="lightcase-loading" className="lightcase-icon-spin"></div>
          <iframe
            width="681"
            height="427"
            src={videoSrc}
            frameBorder="0"
            allowFullScreen={true}
            tabIndex="-1"
            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            style={{
              maxWidth: "100%",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9999",
            }}
          />

          <a
            onClick={() => setPlayVideo(false)}
            className="lightcase-icon-close"
            style={{ opacity: 1, display: "block" }}
          >
            <span>Close</span>
          </a>
        </div>
      )}

      <div
        className="video-section"
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              style={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Box
                className="video-banner"
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
                backgroundPosition={[
                  "center center",
                  "center center",
                  "right center",
                  "right center",
                  "right center",
                ]}
                minHeight={["250px", "320px", "300px", "350px", "450px"]}
              >
                <a className="popup-video" onClick={() => setPlayVideo(true)}>
                  <i className="fas fa-play"></i>
                </a>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Video.propTypes = {
  videoSrc: ProtoTypes.string,
  bgImage: ProtoTypes.string,
};

export default Video;
