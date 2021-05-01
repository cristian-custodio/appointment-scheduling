import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import Form from "../common/form";
import {
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
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBAnimation,
} from "mdbreact";
import "./CreateAppointment.css";

import * as userService from "../../services/userService";
import { getAllUsers } from "../../services/userService";
import { registerAppointment } from "../../services/appointmentService";
import Particles from "react-particles-js";
import UserContext from "../../context/userContext";

class CreateAppointment extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Date: "",
        Owner: "",
        Requester: "",
        Status: "pending",
      },
      users: [],
      errors: {},
    };
  }
  static contextType = UserContext;

  schema = {
    Date: Joi.string().label("Appointment Date"),
    Owner: Joi.string().label("Appointment Person"),
    Requester: Joi.string().label("Requester"),
    Status: Joi.string().label("Status"),
  };

  componentDidMount() {
    async function getUsers() {
      let allUsers = await getAllUsers();
      return allUsers.data.users;
    }
    getUsers().then((users) => {
      let usersOptionSchema = [];

      for (const key in users) {
        let tempUser = {
          _id: users[key].uid,
          name: users[key].email,
        };
        usersOptionSchema.push(tempUser);
      }

      const userContext = this.context;

      this.setState({
        users: usersOptionSchema,
        data: {
          Date: "",
          Owner: "",
          Requester: userContext.currentUser().email,
          Status: "pending",
        },
      });
    });
  }

  doSubmit = async () => {
    try {
      await registerAppointment(this.state.data);
      window.location = "/Dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.registerToken = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const userContext = this.context;
    if (!userContext.currentUser()) return <Redirect to="/Login" />;
    return (
      <div id="registerformpage">
        <MDBView>
          <MDBMask className="white-text gradient">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 80,
                  },
                  size: {
                    value: 3,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
              }}
            />
          </MDBMask>
          <div>
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </div>

          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "5rem" }}
            className="d-flex justify-content-center "
          >
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <img
                    src="https://merchant-pricing-solutions.s3.amazonaws.com/register-people.png"
                    className="img-fluid mx-auto"
                    alt="FaithConnect"
                    width="250px"
                  ></img>
                  {/* <h1 className="display-4 font-weight-bold">Login Portal </h1> */}
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lets connect you with appointments that will help you soar!
                    We are commited to providing you with top level appointment
                    scheduling on all your mobile devices. Join Today!
                  </h6>
                  <MDBBtn href="/#awesome-features" outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              </div>

              <MDBCol
                md="6"
                xl="5"
                className="mb-4"
                style={{ paddingTop: "2rem" }}
              >
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardHeader
                        color="indigo"
                        className="form-header rounded"
                      >
                        <h3 className="my-3">
                          <MDBIcon icon="user-plus" /> New Appointment
                        </h3>
                      </MDBCardHeader>
                      <form onSubmit={this.handleSubmit}>
                        <div className="grey-text">
                          {this.renderSelect("Owner", "Name", this.state.users)}

                          {this.renderInput("Date", "", "", "datetime-local")}

                          <div className="text-center pb-3">
                            {this.renderButton("Submit Appointment Request")}
                          </div>
                        </div>
                      </form>{" "}
                      <MDBModalFooter></MDBModalFooter>
                    </MDBCardBody>
                  </MDBCard>{" "}
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default CreateAppointment;
