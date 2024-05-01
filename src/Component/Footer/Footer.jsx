import { Box, Image } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <footer className={`footer-1`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center" style={{ padding: 0 }}>
            <aside className="widget" style={{ marginTop: "0" }}>
              <div className="about-widget">
                <Image
                  src="assets/images/logo.png"
                  alt=""
                  width={["150px", "150", "200px", "200px", "200px"]}
                />

                <Box
                  className="ab-social"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={[2, 3, 4, 4, 4]}
                >
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="whatsapp"
                    url="https://wa.me/919717094422"
                  />
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="facebook"
                    url="https://www.facebook.com/wisechampsonline/"
                  />
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="instagram"
                    url="https://www.instagram.com/wisechampsquizzes"
                  />
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="linkedin"
                    url="https://www.linkedin.com/company/wisechamps/"
                  />
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="youtube"
                    url="https://m.youtube.com/@wisechamps"
                  />
                  <SocialIcon
                    target="_blank"
                    rel="noreferrer"
                    network="email"
                    url="mailto:hello@wisechamps.com"
                  />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="tel:+918527074411"
                    style={{
                      background: "#5853fc",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <FaPhone />
                  </a>
                </Box>
              </div>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p>© 2024 Copyright all Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
