import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <nav className="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
          <div className="container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">.container</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:flex" id="navbarSupportedContent">
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

        <nav className="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
          <div className="sm:container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">.sm:container</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:flex" id="navbarSupportedContent">
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

        <nav className="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
          <div className="md:container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">.md:container</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:flex" id="navbarSupportedContent">
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

        <nav className="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
          <div className="lg:container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">.lg:container</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:flex" id="navbarSupportedContent">
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

        <nav className="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
          <div className="xl:container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
            <a className="navbar-brand" href="#">.xl:container</a>
            <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse md:flex" id="navbarSupportedContent">
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
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<nav class="navbar navbar-light shadow py-2 mb-4 bg-light md:flex-nowrap md:flex-start">
  <div class="container flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
    ...
  </div>
</nav>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
