import { useEffect, useRef } from "react";
import Header from "../../Component/Header";
import HomeHero from "../../Component/Hero/Home-hero";
import PopularCourse from "../../Component/Course/PopularCourse";
import Footer from "../../Component/Footer/Footer";
import GotoTop from "../../Component/GotoTop";
import { Rewards } from "../../Component/Rewards/Rewards";
import { Leagues } from "../../Component/Leagues/Leagues";
import Testimonial from "../../Component/Testimonials/Testimonial";
import { FormComponent2 } from "../../Component/Form/FormComponent2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@chakra-ui/react";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const quizzing = useRef(null);
  const rewards = useRef(null);
  const stories = useRef(null);
  const freeSession = useRef(null);
  const animateRef = useRef([]);
  animateRef.current = [];

  useEffect(() => {
    animateRef.current.forEach((ele) => {
      gsap.fromTo(
        ele,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          left: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ele,
            start: "top bottom-=100",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  const addToRefs = (ele) => {
    if (ele && !animateRef.current.includes(ele)) {
      animateRef.current.push(ele);
    }
  };

  return (
    <>
      <Header
        logo="assets/images/logo.png"
        joinBtn={true}
        search={true}
        quizRef={quizzing}
        rewardRef={rewards}
        storyRef={stories}
        freeSession={freeSession}
      />
      <HomeHero freeSession={freeSession} />
      <PopularCourse quizRef={quizzing} addToRefs={addToRefs} />
      <Box ref={addToRefs}>
        <Rewards rewardRef={rewards} />
      </Box>
      <Box ref={addToRefs}>
        <Leagues />
      </Box>
      <Testimonial storyRef={stories} addToRefs={addToRefs} />
      <Box ref={addToRefs}>
        <FormComponent2 />
      </Box>
      <Box ref={addToRefs}>
        <Footer />
      </Box>
      <GotoTop />
    </>
  );
}

export default Home;
