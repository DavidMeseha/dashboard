import DashboardIcon from "../icons/DashboardIcon";
import UsersIcon from "../icons/UsersIcon";

export interface NavItem {
  name: string;
  route: string;
  icon: JSX.Element;
}

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    route: "/users",
    icon: <UsersIcon />,
  },
];
