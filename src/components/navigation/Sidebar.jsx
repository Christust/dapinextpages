import Link from "next/link";
import { routes } from "@/constants/routesConstants";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__sidebarRouteContainer">
        <Link className="sidebar__sidebarRoute" href="/">
          <i className="fa-solid fa-user me-3"></i>
          <h4 className="m-0">DAPI</h4>
        </Link>
        <hr />
      </div>
      <div className="d-flex flex-column">
        {routes.map((route) => (
          <div key={route.name} className="sidebar__sidebarRouteContainer">
            <Link
              className="sidebar__sidebarRoute sidebar__sidebarRoute--button"
              href={route.route}
            >
              <i className={route.icon +" me-3"}></i>
              <span>{route.name}</span>
            </Link>
          </div>
        ))}
        <div className="sidebar__sidebarRouteContainer">
            <a
              className="sidebar__sidebarRoute sidebar__sidebarRoute--button"
            >
              <i className="fa-solid fa-door-open me-3"></i>
              <span>Logout</span>
            </a>
          </div>
      </div>
    </nav>
  );
}
