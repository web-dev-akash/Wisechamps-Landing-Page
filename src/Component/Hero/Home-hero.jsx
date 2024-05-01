import { Box } from "@chakra-ui/react";
import { FormComponent } from "../Form/FormComponent";
import { MainCarousel } from "../Carousel/Carousel";
import ProtoTypes from "prop-types";

function HomeHero({ freeSession }) {
  return (
    <Box
      as={"section"}
      className="hero-banner-1"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={[null, null, "90%", "90%", null]}
      margin={"0 auto"}
      mt={[0, 0, "30px", "20px", "40px"]}
      mb={["15px", "20px", "80px", "70px", "80px"]}
    >
      {/* shape  */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <img src="assets/images/home/shape-1.png" alt="" />
        </div>
        <div className="b-shape-2">
          <img src="assets/images/home/shape-2.png" alt="" />
        </div>
        <div className="b-shape-3">
          <img src="assets/images/home/shape-3.png" alt="" />
        </div>
        <div className="b-shape-4">
          <img src="assets/images/home/shape-4.png" alt="" />
        </div>
      </div>
      {/* shape  */}
      <Box
        className="container"
        style={{
          margin: 0,
          width: "100%",
          maxWidth: "1120px",
          height: "auto",
        }}
        padding={["0 22px", "0 40px", "0", "0", "0"]}
      >
        <div
          className="row"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Box
            className="col-lg-7 col-md-6"
            style={{
              paddingLeft: "0",
              paddingRight: "0",
            }}
          >
            <Box
              style={{
                height: "100%",
              }}
            >
              <MainCarousel />
            </Box>
          </Box>
          <div
            className="col-lg-5 col-md-6"
            style={{
              paddingLeft: "0",
              paddingRight: "0",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#ccffcc99",
              }}
            >
              <FormComponent freeSession={freeSession} />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

HomeHero.propTypes = {
  freeSession: ProtoTypes.any,
};

export default HomeHero;
