import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="navbar-group">
          <nav className="navbar bg-gray-50 navbar-light md:flex-nowrap md:flex-start">
            <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
              <a href="#link" className="navbar-brand py-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/rescheme/oss/assets/reschemify/logo/logo.png"
                  className="d-inline-block align-top"
                  alt="Logo"
                  height="80"
                  width="80"
                />
              </a>
              <button className="navbar-toggler md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCyanCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse md:!flex self-stretch" id="navbarCyanCollapse">
                <div className="flex flex-col flex-grow self-stretch pt-2">
                  <div className="navbar-nav md:flex-row ml-auto mt-auto">
                    <form>
                      <button
                        type="button"
                        className="btn btn-sm text-white bg-green hover:bg-green-700 focus:bg-green-700 px-8 rounded-full mr-2"
                      >
                        Action
                      </button>
                      <button type="button" className="btn bg-transparent underline text-blue hover:text-blue-700 focus:text-blue-700">
                        Link
                      </button>
                    </form>
                  </div>

                  <div className="navbar-nav md:flex-row mx-auto mt-auto">
                    <ul className="nav nav-outline">
                      <li className="nav-item">
                        <a className="nav-link !border-red !text-red active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link border-red dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <a className="nav-link border-red" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link border-red disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="navbar-nav md:flex-row self-start py-2">
                  <ul className="nav nav-outline">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                          className="inline-block max-w-full h-auto bg-white border rounded-full p-1"
                          alt="avatar"
                          height="35"
                          width="35"
                        /> <i className="fas fa-caret-down ml-1"></i>
                      </a>
                      <div className="dropdown-menu right-0 left-auto">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <hr className="my-2" />
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
