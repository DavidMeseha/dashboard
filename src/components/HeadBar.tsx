import HampurgerButton from "./HampurgerButton";

interface HeadBarProps {
  openMobileNav: () => void;
}

export default function HeadBar({ openMobileNav }: HeadBarProps) {
  return (
    <header>
      <div>
        <HampurgerButton className="hamburger" onClick={openMobileNav} />
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
