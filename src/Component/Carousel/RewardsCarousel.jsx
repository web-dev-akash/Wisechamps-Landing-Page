import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

export const RewardsCarousel = () => {
  return (
    <Box
      height={"100%"}
      minHeight={"550px"}
      borderRadius={"45px"}
      overflow={"hidden"}
    >
      <Carousel
        className="mainSlider"
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerSlidePercentage={100}
      >
        <Image
          width={"100%"}
          height={"100%"}
          src="assets/images/home/report1.png"
        />
        <Image
          width={"100%"}
          height={"100%"}
          src="assets/images/home/report2.png"
        />
        <Image
          width={"100%"}
          height={"100%"}
          src="assets/images/home/report3.png"
        />
        <Image
          width={"100%"}
          height={"100%"}
          src="assets/images/home/report4.png"
        />
      </Carousel>
    </Box>
  );
};
