import ProtoTypes from "prop-types";
import CourseItemCard from "../Cards/CourseItemCard";
import { Box, Text } from "@chakra-ui/react";
import Video from "../Video/Video";

function PopularCourse({ quizRef, ref }) {
  return (
    <Box
      as="section"
      m={["60px 0", "60px 0", "100px 0", "130px 0 80px", "150px 0 80px"]}
      ref={quizRef}
      className="popular-course-section"
    >
      <div className="container">
        <div
          ref={ref}
          className="row"
          style={{
            marginBottom: "40px",
          }}
        >
          <div className="d-lg-flex d-sm-flex col-lg-5 col-md-5 justify-content-center align-content-center flex-column">
            <Text
              as={"h2"}
              className="sec-title"
              fontWeight={700}
              fontSize={[null, null, "45px", "40px", "45px"]}
              mb={["20px", "20px", "40px", "40px", "40px"]}
            >
              Quizzes are Fun way to Learn
            </Text>
            <Text
              as={"p"}
              fontSize={[null, null, "25px", "20px", "25px"]}
              mb={"30px"}
            >
              50% Kid's do well in competition who are Quiz Champs.
            </Text>
          </div>
          <div className="col-lg-7 col-md-7" style={{ padding: 0 }}>
            <Video
              right
              bgImage={"assets/images/home/learn-bg.png"}
              videoSrc={
                "https://www.youtube.com/embed/ukoSPFtAlgs?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=null&amp;mute=0&amp;origin=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false"
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="course-wrapper">
              <CourseItemCard title="Learn With Experts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <image
                    width="80"
                    height="80"
                    xlinkHref="assets/images/home/learn.png"
                  />
                </svg>
              </CourseItemCard>
              <CourseItemCard title="Compete & Grow Grades">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <image
                    width="80"
                    height="80"
                    xlinkHref="assets/images/home/growth.png"
                  />
                </svg>
              </CourseItemCard>
              <CourseItemCard title="Be Ready for Big Exams">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                >
                  <image
                    width="80"
                    height="80"
                    xlinkHref="assets/images/home/exams.png"
                  />
                </svg>
              </CourseItemCard>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

PopularCourse.propTypes = {
  quizRef: ProtoTypes.any,
  ref: ProtoTypes.any,
};

export default PopularCourse;
