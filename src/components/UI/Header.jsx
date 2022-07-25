import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-log">
                  Create Log
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-tech">
                  Create Tech
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/techs">
                  techs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
