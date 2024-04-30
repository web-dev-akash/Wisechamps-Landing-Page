import { useEffect, useState } from "react";
import {
  InputGroup,
  InputLeftAddon,
  Text,
  Box,
  Select,
  Button,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import axios from "axios";
import { tailChase } from "ldrs";
import ProtoTypes from "prop-types";
tailChase.register();

export const FormComponent = ({ register, freeSession }) => {
  const query = new URLSearchParams(window.location.search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState(null);
  const [email, setEmail] = useState();
  const [user, setUser] = useState({});
  const [otp, setOtp] = useState(null);
  const [formOTP, setFormOTP] = useState(null);
  const [tempLoading, setTempLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [refereeId, setRefereeId] = useState(query.get("refereeId") || null);
  const [registerForm, setRegisterForm] = useState({
    email: "",
    phone: "",
    student_name: "",
    student_grade: "",
    source_campaign: "",
    relation: "",
  });

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  const handleGroupLinkClick = async () => {
    window.location.href = "https://chat.whatsapp.com/GkjhNsOtLMMHESyciLUwtM";
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setRegisterForm({
      ...registerForm,
      [name]: value,
      source_campaign: refereeId ? "Referral Community" : "Join Community",
    });
  };

  const handleOTPChange = (value) => {
    setFormOTP(value);
  };

  const verifyPhoneNumber = async (e, data) => {
    try {
      e.preventDefault();
      if (data.student_name.length < 3) {
        alert("Please Enter a Valid Student Name");
        return;
      }
      if (!emailRegex.test(data.email)) {
        alert("Please Enter a Valid Email");
        return;
      }
      if (data.phone.length < 10) {
        alert("Please Enter a Valid Phone Number");
        return;
      }
      if (!data.student_grade || data.student_grade === "") {
        alert("Please select a Valid Student Grade");
        return;
      }
      if (user.id && !data.relation) {
        alert("Please choose who referred you");
        return;
      }
      setTempLoading(true);
      const url = `https://backend.wisechamps.com/user/verify`;
      const res = await axios.post(url, {
        phone: data.phone,
        email: data.email,
      });
      if (res.data.status === 201) {
        const otp = res.data.otp;
        setMode("otp");
        setOtp(otp);
      } else {
        setMode(res.data.mode);
      }
      setTempLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error is ------------", error);
    }
  };

  const handleRegisterFormClick = async (data, refereeId) => {
    try {
      setLoading(true);
      const url = `https://backend.wisechamps.com/user/add`;
      const res = await axios.post(url, {
        email: data.email,
        phone: data.phone,
        parent_name: data.student_name,
        student_name: data.student_name,
        student_grade: data.student_grade,
        referralId: refereeId || "",
        relation: data.relation || "",
        source_campaign: data.source_campaign || "Join Community",
      });
      const mode = res.data.mode;
      if (mode === "useradded") {
        setEmail(data.email);
      }
      setMode(mode);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error is ------------", error);
    }
  };

  const getReferralUser = async (phone) => {
    try {
      const url = `https://backend.wisechamps.com/user`;
      const resUser = await axios.post(url, { phone, referral: true });
      const mode = resUser.data.mode;
      if (mode === "user") {
        setUser(resUser.data.user);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (refereeId && !user.id) {
      getReferralUser(refereeId);
    }
  }, []);

  if (loading) {
    return (
      <Box
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        backdropBlur={"5px"}
        height={"100%"}
        minHeight={"50vh"}
      >
        <l-tail-chase size="50" speed="1.75" color="#4e46e4"></l-tail-chase>
      </Box>
    );
  }

  if (error) {
    setTimeout(() => {
      setLoading(false);
      setError(false);
      setTempLoading(false);
      setMode(null);
    }, 2000);
    return (
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"1rem"}
        minHeight={"50vh"}
        textAlign={"center"}
      >
        <Text
          fontWeight={600}
          fontSize={["20px", "22px", "25px", "22px", "25px"]}
        >
          Something Went Wrong. Please try again..
        </Text>
      </Box>
    );
  }

  if (mode === "duplicateuser") {
    return (
      <div
        className="quizSubmitted"
        style={{
          padding: "0 20px",
          minHeight: "50vh",
          height: "100%",
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Text
          as={"h1"}
          mt={0}
          fontWeight={600}
          fontSize={["20px", "22px", "25px", "22px", "25px"]}
        >
          OPPS!
        </Text>
        <Text fontSize={["14px", "16px", "18px", "16px", "18px"]}>
          It looks like you are already registered with us. Please join our
          whatsapp group to get all the quiz details.
        </Text>
        <Button
          mt={3}
          fontSize={["13px", "13px", "14px", "14px"]}
          id="submit-btn"
          onClick={handleGroupLinkClick}
        >
          Join Our Whatsapp Group
        </Button>
      </div>
    );
  }

  if (mode === "useradded") {
    setTimeout(() => {
      window.location.assign(`https://students.wisechamps.com?email=${email}`);
    }, 5000);
    return (
      <div
        className="quizSubmitted"
        style={{
          minHeight: "50vh",
          height: "100%",
          maxWidth: "750px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Text
          as={"h1"}
          mt={0}
          mb={"10px"}
          fontWeight={600}
          fontSize={["25px", "26px", "27px", "26px", "27px"]}
        >
          Thank You
        </Text>
        <Text fontSize={["14px", "16px", "18px", "16px", "18px"]}>
          <Text>
            We have shared the group joining link on your registered whatsapp
            number.
          </Text>
          <Text mt={"10px"}>
            Join the whatsapp group to get the sessions schedule and joining
            details. <b>5 free sessions have been added to the account.</b>
          </Text>
        </Text>
        <Button
          fontSize={["13px", "13px", "14px", "14px"]}
          id="submit-btn"
          onClick={handleGroupLinkClick}
        >
          Join Our Whatsapp Group
        </Button>
      </div>
    );
  }

  if (mode === "otp") {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        padding={[5, 5, 2, 0, 0]}
        maxWidth={"500px"}
        margin={"0 auto"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          textAlign={"left"}
          padding={["1rem", "1rem", "2rem", "3rem"]}
          width={"100%"}
          borderRadius={"10px"}
          height={"100%"}
          gap={0}
        >
          <Text
            fontSize={["20px", "25px", "25px", "25px", "25px"]}
            width={"100%"}
            fontWeight={600}
          >
            Enter 6 digit OTP
          </Text>
          <Text fontSize={["13px", "13px", "14px", "15px"]}>
            We have sent an OTP to the number <br />
            <Text as={"span"}>
              XXXXXX
              {registerForm.phone.substring(
                registerForm.phone.length - 4,
                registerForm.phone.length
              )}
            </Text>
          </Text>
          <HStack justifyContent={"center"} mt={5}>
            <PinInput
              manageFocus={true}
              autoFocus={true}
              type="number"
              otp
              size={["md", "md", "lg", "lg"]}
              onChange={(event) => handleOTPChange(event)}
              isInvalid={otp !== formOTP && formOTP?.length === 6}
              focusBorderColor={
                formOTP?.length === 6 && otp === formOTP
                  ? "#0DD20D"
                  : formOTP?.length === 6 && otp !== formOTP
                  ? "red.500"
                  : "#5838fc"
              }
            >
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "2px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "2px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "2px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "2px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "2px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
              <PinInputField
                border={
                  otp === formOTP && formOTP?.length === 6
                    ? "1px solid #0DD20D"
                    : null
                }
                background={"white"}
              />
            </PinInput>
          </HStack>
          <Button
            isLoading={formOTP?.length === 6 && otp === formOTP ? false : true}
            mt={8}
            loadingText={
              formOTP?.length === 6 && otp !== formOTP
                ? "Invalid OTP"
                : "Submit"
            }
            spinnerPlacement="none"
            textAlign={"center"}
            width={"100%"}
            id={
              formOTP?.length === 6 && otp === formOTP
                ? "submit-btn"
                : "submit-btn-loading"
            }
            border="none"
            cursor="pointer"
            onClick={() => handleRegisterFormClick(registerForm, user.id)}
            fontWeight={600}
            fontSize={["13px", "13px", "14px", "15px"]}
          >
            Submit
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      padding={["20px 15px", "20px 35px", 0, 0, 0]}
    >
      <form id={"input-container"} className={register && "input-container2"}>
        {!register ? (
          <>
            <Text
              as={"p"}
              fontWeight={700}
              fontSize={["28px", "30px", "35px", "32px", "40px"]}
              mt={"10px"}
              color={"#2c234d"}
            >
              GET AN EARLY START
            </Text>
            <Text
              color={!"#5d5a67"}
              fontSize={["15px", "16px", "20px", "16px", "20px"]}
              marginBottom={[
                "10px !important",
                "10px !important",
                "15px !important",
                "15px !important",
              ]}
            >
              Invest one hour a week for Kid's success
            </Text>
          </>
        ) : (
          <>
            <Text
              as={"p"}
              fontWeight={700}
              fontSize={["34px", "35px", "40px", "35px", "45px"]}
              pt={[
                "20px !important",
                "20px !important",
                "10px !important",
                "0px !important",
                "0px !important",
              ]}
              color={"#003500"}
            >
              Register Now
            </Text>
            <Text
              color={"#002903"}
              fontSize={["18px", "19px", "20px", "18px", "25px"]}
              m={"10px 0 40px 0 !important"}
            >
              Get First 5 Sessions{" "}
              <b style={{ color: "#5853fc" }}>Absolutely Free</b>
            </Text>
          </>
        )}

        <InputGroup className="inputGroup">
          <input
            ref={freeSession}
            type="text"
            inputMode="text"
            onChange={handleFormChange}
            className="input-field"
            name="student_name"
            id="student_name"
            required
            placeholder="Student Name"
          />
          <label htmlFor="student_name" className="input-label">
            Student Name
          </label>
          <Text as={"span"} className="input-highlight"></Text>
        </InputGroup>
        <InputGroup className="inputGroup">
          <input
            type="email"
            inputMode="email"
            onChange={handleFormChange}
            className="input-field"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <Text as={"span"} className="input-highlight"></Text>
        </InputGroup>
        <InputGroup className="inputGroup">
          <InputLeftAddon
            fontSize={"13px"}
            fontWeight={"600"}
            padding={"20px 15px"}
            color={"#5838fc"}
          >
            +91
          </InputLeftAddon>
          <input
            placeholder="Phone Number"
            className="input-field"
            type="tel"
            inputMode="tel"
            id="phone"
            name="phone"
            maxLength={10}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="phone" className="input-label">
            Phone Number
          </label>
          <Text as={"span"} className="input-highlight"></Text>
        </InputGroup>
        <InputGroup className="inputGroup">
          <Select
            className={"input-field"}
            onChange={handleFormChange}
            name="student_grade"
            id="student_grade"
            placeholder="Student Grade"
          >
            <option value={"1"}>Grade 1</option>
            <option value={"2"}>Grade 2</option>
            <option value={"3"}>Grade 3</option>
            <option value={"4"}>Grade 4</option>
            <option value={"5"}>Grade 5</option>
            <option value={"6"}>Grade 6</option>
            <option value={"7"}>Grade 7</option>
            <option value={"8"}>Grade 8</option>
          </Select>
        </InputGroup>
        <InputGroup className="inputGroup" display={user.id ? "block" : "none"}>
          <Select
            className="input-field"
            placeholder="Who Referred You"
            onChange={handleFormChange}
            name="relation"
            id="relation"
            required
          >
            <option value={"Friend"}>Friend</option>
            <option value={"Cousin"}>Cousin</option>
          </Select>
        </InputGroup>
        <Button
          textAlign={"center"}
          width={"100%"}
          id="submit-btn"
          border="none"
          cursor="pointer"
          onClick={(e) => verifyPhoneNumber(e, registerForm)}
          isLoading={tempLoading}
          loadingText="Sending OTP"
        >
          <Text fontWeight={600} fontSize={["13px", "13px", "14px", "15px"]}>
            Submit
          </Text>
        </Button>
      </form>
    </Box>
  );
};

FormComponent.propTypes = {
  register: ProtoTypes.bool,
  freeSession: ProtoTypes.any,
};
