import Link from "next/link";
import { routes } from "@/constants/routesConstants";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <div className=" p-2">
        <Link className="sidebar__sideOption" href="/">
          DAPI
        </Link>
      </div>
      <div className="d-flex flex-column">
        {routes.map((route) => (
          <div key={route.name} className="p-2">
            <Link className="sidebar__sideOption" href={route.route}>
              {route.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
