import {
  Box,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";

export const RewardSteps = () => {
  const steps = [
    {
      src: "assets/images/home/steps1.png",
      description: `Total 10 questions per quiz`,
    },
    {
      src: "assets/images/home/steps2.png",
      description: `Top the leaderboard and win prizes`,
    },
    {
      src: "assets/images/home/steps3.png",
      description: `Get solution and explanation to all questions`,
    },
  ];
  const { activeStep } = useSteps({
    index: 3,
    count: steps.length,
  });
  return (
    <Stepper
      mt={3}
      size={"lg"}
      index={activeStep}
      gap={[5, 5, 5, 5, 8]}
      minHeight={["240px", "250px", "310px", "320px"]}
      orientation={"vertical"}
      position={"relative"}
    >
      <Text
        as={"h2"}
        fontSize={["20px", "20px", "25px"]}
        fontWeight={600}
        position={"absolute"}
        zIndex={"10"}
        color={"#5853fc"}
        top={["13px", "13px", "15px", "12px", "17px"]}
        left={["15px", "15px", "16px", "14px", "18px"]}
      >
        10
      </Text>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator
            borderRadius={"15px !important"}
            minWidth={["50px", "50px", "60px", "55px", "65px"]}
            minHeight={["50px", "50px", "60px", "55px", "65px"]}
            padding={"7px"}
            backgroundColor={"#5853fc !important"}
            mb={["30px", "30px", "40px", "45px", "50px"]}
          >
            <StepStatus
              complete={<Image width={"100%"} src={step.src} alt="" />}
              incomplete={<Image width={"100%"} src={step.src} alt="" />}
              active={<Image width={"100%"} src={step.src} alt="" />}
            />
          </StepIndicator>
          <Box
            height={["50px", "50px", "60px", "55px", "65px"]}
            display={"flex"}
            alignItems={"center"}
          >
            <StepDescription
              fontSize={[
                "15px !important",
                "15px !important",
                "20px !important",
                "20px !important",
                "25px !important",
              ]}
              marginBottom={"0 !important"}
            >
              {step.description}
            </StepDescription>
          </Box>
          <StepSeparator
            marginTop={[
              "15px !important",
              "15px !important",
              "30px !important",
              "15px !important",
              "30px !important",
            ]}
            backgroundColor="#5853fc !important"
          />
        </Step>
      ))}
    </Stepper>
  );
};
