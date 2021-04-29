import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

const FooterPage = () => {
  const iosImgStyle = {
    width: "50%",
    padding: "10px",
  };

  const androidImgStyle = {
    width: "50%",
    padding: "5px",
  };

  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <div style={{ backgroundColor: "#4285f4" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">Appointment Scheduling Tool</h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a href="" className="fb-ic ml-0 p-1">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a href="" className="tw-ic p-1">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>

              <a href="" className="li-ic p-1">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a href="" className="ins-ic p-1">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Appointment Scheduling Tool</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Appointment scheduling tool that will help you schedule and
              prioritize appointments.
            </p>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Account Information</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="/Dashboard">Dashboard</a>
            </p>
            <p>
              <a href="/Register">Register</a>
            </p>
            <p>
              <a href="/Login">Log In</a>
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="/Appointment/New">New Appointment</a>
            </p>
            <p>
              <a href="/Dashboard">Recent Appointments</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Lets book appointments!</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <div id="thumbs">
              <img
                style={iosImgStyle}
                id="single_image1"
                src="https://faithconnect.s3.us-east-2.amazonaws.com/images/app-store-badge-footer.webp"
                alt=""
              />

              <img
                style={androidImgStyle}
                id="single_image1"
                src="https://faithconnect.s3.us-east-2.amazonaws.com/images/google-play-badge-footer.webp"
                alt=""
              />

              <span className="stretch"></span>
            </div>
            <MDBCol align="center">
              <MDBBtn href="" size="sm" tag="a" floating social="fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn href="" size="sm" tag="a" floating social="ins">
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn href="" size="sm" tag="a" floating social="ins">
                <MDBIcon fab icon="linkedin" />
              </MDBBtn>
              <MDBContainer
                className="text-uppercase white-text font-weight-bold descriptionTitle"
                size="sm"
                tag="a"
                floating="true"
                social="ins"
              >
                Follow Us!
              </MDBContainer>
            </MDBCol>
          </MDBCol>
        </MDBRow>
        <MDBRow></MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/"> Appointment Scheduling, LLC </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
