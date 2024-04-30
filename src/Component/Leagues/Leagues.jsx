import { Text } from "@chakra-ui/react";
import { LeagueSlider } from "./LeagueSlider";
import ProtoTypes from "prop-types";

export const Leagues = ({ ref }) => {
  return (
    <section className="league-section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Text
              as={"h1"}
              fontSize={["34px", "34px", "34px", "40px", "45px"]}
              fontWeight={700}
              m={[
                "25px 0 85px 0",
                "25px 0 85px 0",
                "35px 0 95px 0",
                "40px 0 105px 0",
                "40px 0 105px 0",
              ]}
            >
              Get Ready for Big Leagues
            </Text>
          </div>
          <div className="col-md-12 text-center">
            <LeagueSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

Leagues.propTypes = {
  ref: ProtoTypes.any,
};
