export default function MyReactPage() {
  return (
    <main>
      <div className="navbar-group">
        <nav className="navbar bg-blue navbar-dark py-2 md:flex-nowrap md:flex-start">
          <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCyanCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:!flex" id="navbarCyanCollapse">
              <ul className="navbar-nav md:flex-row mr-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown <i className="fas fa-caret-down ml-1"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <hr className="my-2" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <nav className="navbar bg-blue navbar-dark pt-2 md:flex-nowrap md:flex-start">
          <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <div className="collapse navbar-collapse md:!flex">
              <div className="navbar-nav md:flex-row mx-auto">
                <ul className="nav nav-outline">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown <i className="fas fa-caret-down ml-1"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <hr className="my-2" />
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
