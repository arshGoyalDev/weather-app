import "./Styles/NavBar.scss";

const NavBar = ({ hide, otherDetailsMenu, setOtherDetailsMenu }) => {
  return (
    <nav>
      <h2 className={`app-name ${hide ? "animate-left" : ""}`}>
        weather.today
      </h2>
      <button
        className={`menu-btn ${hide ? "animate-right" : ""}`}
        onClick={() => setOtherDetailsMenu(!otherDetailsMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
