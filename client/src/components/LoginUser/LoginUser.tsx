import React, { Component, useContext } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../../services/authService";
import UserContext from "../../context/userContext";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBAnimation,
} from "mdbreact";
import "./Login.css";

import Particles from "react-particles-js";

class LoginForm extends Form {
  static contextType = UserContext;
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    console.log("", this.context);
  }

  doSubmit = async () => {
    try {
      const userContext = this.context;
      const { data } = this.state;
      await userContext.handleLogin(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/Dashboard";
    } catch (ex) {
      console.log(ex.response);
      if (ex.response && ex.response.status === 400) {
        console.log("THERE WAS AN ERROR");

        const errors = { ...this.state.errors };
        // errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const userContext = this.context;
    if (userContext.currentUser()) return <Redirect to="/Dashboard" />;

    return (
      <div id="loginformpage">
        <MDBView>
          <MDBMask className="white-text gradient">
            {" "}
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

          <MDBContainer
            style={{
              height: "100%",
              width: "100%",
              paddingTop: "10rem",
              paddingBottom: "10rem",
            }}
            className="d-flex justify-content-center "
          >
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <img
                    src="https://merchant-pricing-solutions.s3.amazonaws.com/login-people-image.png"
                    className="img-fluid mx-auto"
                    alt="FaithConnect"
                    width="400px"
                  ></img>
                  {/* <h1 className="display-4 font-weight-bold">Login Portal </h1> */}
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lets connect you with appointments that will help you soar!
                    We are commited to providing you with top level appointment
                    scheduling on all your mobile devices. Join Today!
                  </h6>
                  {/* <MDBBtn outline color="white">
                  Learn More
                </MDBBtn> */}
                </MDBAnimation>
              </div>

              <MDBCol
                md="6"
                xl="5"
                className="mb-4"
                style={{ paddingTop: "6rem" }}
              >
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardHeader
                        color="indigo"
                        className="form-header rounded"
                      >
                        <h3 className="my-3">
                          <MDBIcon icon="lock" /> Login:
                        </h3>
                      </MDBCardHeader>

                      <form onSubmit={this.handleSubmit}>
                        <div className="grey-text">
                          {this.renderInput("username", "Username", "envelope")}
                          {this.renderInput(
                            "password",
                            "Password",
                            "lock",
                            "password"
                          )}
                        </div>
                        <div className="text-center pb-3">
                          {this.renderButton("Login")}
                        </div>
                      </form>

                      <MDBModalFooter>
                        <p className="font-small grey-text d-flex justify-content-end">
                          Not a member?
                          <a
                            href="/register"
                            className="blue-text ml-1 text-center"
                          >
                            Sign Up
                          </a>
                        </p>
                      </MDBModalFooter>
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

export default LoginForm;
