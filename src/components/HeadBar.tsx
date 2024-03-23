import HampurgerButton from "./HampurgerButton";

export default function HeadBar() {
  return (
    <header>
      <div>
        <HampurgerButton
          className="hamburger"
          onClick={() => console.log("Hello")}
        />
      </div>
      <a href="#" className="user-dropdown">
        <div className="user">
          <div className="img-container">
            <img src="\pp.jfif" />
          </div>
          <h4>User Name</h4>
        </div>
        <div className="arrow-down"></div>
      </a>
    </header>
  );
}
