import React from "react";

const Webheader = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="topbar_website">
            <div className="row">
              <div className="col-md-6">
                <div className="topleft-links">
                  <span style={{ "text-decoration": "underline" }}>
                    Personal
                  </span>
                  <span>|</span>
                  <a href="#">Business</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="topright-links ">
                  <a href="#">Sign in</a>
                  <span>or</span>
                  <a href="#"> Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-bar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  className="img-fluid"
                  src="/img/o2-img-update.png"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      why O2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                </ul>
                <div className="rightside d-flex">
                  <div>
                    <a href="#">My O2</a>
                  </div>
                  <div className="abc">
                    <a href="#">
                      {" "}
                      <i className="fa fa-search fa-rotate-90 fa-2xs"></i>{" "}
                      Search
                    </a>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ "margin-top": "-10px", color: "white" }}
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-basket3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Webheader;
