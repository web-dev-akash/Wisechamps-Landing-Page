import { Box, Image, Text } from "@chakra-ui/react";
import ProtoTypes from "prop-types";
import Video from "../Video/Video";

function Testimonial({ storyRef, addToRefs }) {
  return (
    <Box
      as="section"
      m={["80px 0", "80px 0", "100px 0", "150px 0", "150px 0"]}
      ref={storyRef}
      className="popular-course-section"
    >
      <div className="container">
        <div className="row">
          <div
            ref={addToRefs}
            className="col-lg-5 col-md-5 d-lg-flex d-sm-flex justify-content-center flex-column"
            style={{ paddingRight: "0" }}
          >
            <Text
              as={"h2"}
              className="sec-title"
              fontWeight={700}
              fontSize={[null, null, "35px", "40px", "45px"]}
              mb={["20px", "20px", "40px", "40px", "40px"]}
            >
              Meet Wisechamps
            </Text>
            <Text
              as={"p"}
              fontSize={[null, null, "20px", "20px", "25px"]}
              mb={"35px"}
            >
              From Zero to Hero | See Our International Rank{" "}
              <span>
                <Image
                  width={["35px", "40px", "45px", "40px", "50px"]}
                  src="assets/images/home/rank1.png"
                  alt=""
                />
              </span>{" "}
              Student's Testimonial | Wisechampions{" "}
              <span>
                <Image
                  width={["30px", "35px", "40px", "35px", "45px"]}
                  src="assets/images/home/trophy.png"
                  alt=""
                />
              </span>
            </Text>
          </div>
          <div className="col-lg-7 col-md-7" style={{ padding: 0 }}>
            <Video
              bgImage={"assets/images/home/testimonial.png"}
              videoSrc={
                "https://www.youtube.com/embed/PV5QmjDgtdI?si=qtHh7VK9RM10zynO&autoplay=1&cc_load_policy=1&color=null&controls=1&disablekb=0&enablejsapi=0&end=null&fs=1&h1=null&iv_load_policy=1&loop=0&modestbranding=null&mute=0&origin=null&playsinline=null&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&nocookie=false"
              }
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

Testimonial.propTypes = {
  storyRef: ProtoTypes.any,
  addToRefs: ProtoTypes.any,
};

export default Testimonial;
