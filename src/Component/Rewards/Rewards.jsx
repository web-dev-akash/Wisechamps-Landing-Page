import ProtoTypes from "prop-types";
import { RewardsCarousel } from "../Carousel/RewardsCarousel";
import { Box, Text } from "@chakra-ui/react";
import { RewardSteps } from "../Steps/Steps";
export const Rewards = ({ rewardRef }) => {
  return (
    <section ref={rewardRef} className="rewards-section">
      <div className="container">
        <div
          className="row"
          style={{ overflow: "hidden", paddingLeft: "0", paddingRight: "0" }}
        >
          <div
            className="col-lg-4 col-md-5"
            style={{
              padding: "0",
              position: "relative",
              maxWidth: "270px",
              maxHeight: "570px",
              margin: "0 auto",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                zIndex: 99,
                minWidth: "300px",
                maxWidth: "300px",
                minHeight: "600px",
              }}
              width={"100%"}
              height={"100%"}
              src="assets/images/home/iphone.png"
              alt=""
            />
            <div
              style={{
                height: "100%",
              }}
            >
              <RewardsCarousel />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="ab-content">
              <Text
                as={"h3"}
                fontSize={[
                  null,
                  null,
                  null,
                  "40px !important",
                  "45px !important",
                ]}
              >
                How it Helps Kids ?
              </Text>
              <Box mt={"25px"}>
                <RewardSteps />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Rewards.propTypes = {
  rewardRef: ProtoTypes.any,
};
