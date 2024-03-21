import { Link, useLocation } from "react-router-dom";
import Logo from "../icons/Logo";
import { navItems } from "../static-data/navigationItems";

export default function SideNav() {
  const router = useLocation();

  return (
    <>
      <div>
        <div className="logo">
          <div className="icon">
            <Logo />
          </div>
          <i>ashboard</i>
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li
              className={`navItem ${
                router.pathname === item.route ? "selected" : ""
              }`}
              key={index}
            >
              <Link to={item.route} className="nav-link">
                <i>{item.icon}</i>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>Logout</div>
    </>
  );
}
