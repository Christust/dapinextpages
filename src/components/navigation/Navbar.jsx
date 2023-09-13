import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          DAPI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Inicio
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                Acerca de...
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Inventario
              </span>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">
                  Separated link
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
