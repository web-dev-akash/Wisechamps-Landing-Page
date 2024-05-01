import { FormComponent } from "./FormComponent";
import ProtoTypes from "prop-types";

export const FormComponent2 = ({ freeSession }) => {
  return (
    <section
      className="form-section"
      style={{
        backgroundColor: "#7FFF85",
        backgroundAttachment: "fixed",
        backgroundImage: "url(assets/images/home/register-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container"
        style={{
          margin: "60px auto 0 auto",
          padding: "50px 20px",
          overflow: "hidden",
        }}
      >
        <div className="row">
          <div
            className="col-md-12"
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              background: "#ffffff80",
              borderRadius: "20px",
            }}
          >
            <FormComponent register freeSession={freeSession} />
          </div>
        </div>
      </div>
    </section>
  );
};

FormComponent2.propTypes = {
  freeSession: ProtoTypes.any,
};
