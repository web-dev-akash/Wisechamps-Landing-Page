import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const MainCarousel = () => {
  return (
    <Box height={"100%"}>
      <Carousel
        className="mainSlider"
        autoPlay={true}
        centerMode={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        centerSlidePercentage={100}
      >
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          src="https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          src="https://images.unsplash.com/photo-1565665643598-b888bfb550c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
        />
      </Carousel>
    </Box>
  );
};
