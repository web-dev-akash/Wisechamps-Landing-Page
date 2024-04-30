import useWindowPosition from "../../Hooks/useWindowPosition";

function GotoTop() {
  const scrollPosition = useWindowPosition();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <a
      id="back-to-top"
      onClick={scrollToTop}
      style={{
        bottom: "20px",
        opacity: scrollPosition > 600 ? "1" : "0",
        visibility: "visible",
      }}
    >
      <i className="fal fa-angle-double-up"></i>
    </a>
  );
}

export default GotoTop;
