import ProtoTypes from "prop-types";

function Header({ logo, quizRef, rewardRef, storyRef, freeSession }) {
  const handleScollIntoView = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const focusOnForm = (ref) => {
    ref.current?.focus();
  };

  return (
    <header className="header-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="" />
              </a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li
                    className="menu-item-has-children"
                    onClick={() => handleScollIntoView(quizRef)}
                  >
                    <a>Quizing</a>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => handleScollIntoView(rewardRef)}
                  >
                    <a>Rewards</a>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => handleScollIntoView(storyRef)}
                  >
                    <a>Stories</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => focusOnForm(freeSession)}
                className="join-btn"
              >
                Free Sessions
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: ProtoTypes.string,
  logo: ProtoTypes.string,
  quizRef: ProtoTypes.any,
  rewardRef: ProtoTypes.any,
  storyRef: ProtoTypes.any,
  freeSession: ProtoTypes.any,
};

export default Header;
