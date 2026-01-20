import { NavLink } from "react-router";

export default function Header({ appName }) {
  return (
    <header className="fixed-top">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{appName || 'default app'}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to='/'>
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to='/movies'>
                  Movies
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
