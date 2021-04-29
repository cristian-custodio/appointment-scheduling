import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./Home.css";

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    let panel = document.querySelector("nav") as HTMLElement;
    panel.style.height = "65";

    // document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    let panel = document.querySelector("nav") as HTMLElement;
    panel.style.height = "auto";
  }

  render() {
    const { collapsed } = this.state;

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="white-text gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <MDBCol md="6" className="text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Schedule an Appointment With us Today!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lets connect you with appointments that will help you soar!
                    We are commited to providing you with top level appointment
                    scheduling on all your mobile devices. Join Today!
                  </h6>
                  <MDBBtn color="info">Register</MDBBtn>
                  <MDBBtn id="login" outline className="btn-outline-white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer id="awesome-features">
          <MDBRow center>
            {/* Section: Features v.4 */}

            <section id="features" className="text-center my-5">
              {/* Section heading */}
              <h2
                className="title font-weight-bold my-5 wow fadeIn"
                data-wow-delay="0.2s"
              >
                <strong>Awesome Features</strong>
              </h2>
              {/* Section description */}
              <p
                className="grey-text w-responsive mx-auto mb-5 wow fadeIn"
                data-wow-delay="0.2s"
              >
                Lets connect you with appointments that will help you soar! We
                are commited to providing you with top level appointment
                scheduling on all your mobile devices. Join Today!
              </p>
              {/* Grid row */}
              <div className="row wow fadeIn" data-wow-delay="0.2s">
                {/* Grid column */}
                <div className="col-lg-4 text-center">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-calendar-check blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">
                      Appointment Dashboard
                    </h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">
                        View all your appointments in one place! This will help
                        you be the most prepared!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4 text-center">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-users blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">
                      Unlimited Users
                    </h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">
                        Register as many users as you want, for the whole
                        family, we are here to serve.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4 text-center mb-4">
                  <div className="icon-area">
                    <div className="circle-icon">
                      <i className="fas fa-list-ol blue-text" />
                    </div>
                    <br />
                    <h5 className="dark-grey-text font-weight-bold mt-2">
                      Classify Appointments
                    </h5>
                    <div className="mt-1">
                      <p className="mx-3 grey-text">
                        Classify the urgency of your appointments, and make sure
                        you don't miss the important ones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Grid column */}
              </div>
              {/* Grid row */}
            </section>
            {/* Section: Features v.4 */}
            {/* Section: Pricing v.5 */}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;
