import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import auth from "../../services/authService";

import "./Dashboard.css";
import { Redirect } from "react-router-dom";
import RecentAppointmentsTable from "../../components/RecentAppointmentsTable";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBView,
  MDBCardText,
  MDBMask,
} from "mdbreact";

const Dashboard = () => {
  const userContext = useContext(UserContext);




  if (!auth.getCurrentUser()) return <Redirect to={"/Login"} />;

  return (
    <div id="dashboard">
      <MDBView>
        <MDBMask className="white-text gradient" />
        <MDBContainer style={{ marginTop: "120px", marginBottom: "50px" }}>
          <MDBRow>
            <MDBCol>
              {" "}
              <MDBCard wide cascade className="m">
                <MDBView cascade className="gradient-card-header blue-gradient">
                  <h3>
                    <strong>Appointment Scheduling Tool</strong>
                  </h3>
                </MDBView>

                <MDBCardBody cascade className="text-center pt-4 pb-5">
                  <h4 className="font-weight-bold blue-text pb-3">
                    {userContext.currentUser().role === 2 ? "Support " : ""}{" "}
                    Recent Appointments
                  </h4>

                  <MDBCardText>
                    <h5>
                      {" "}
                      Welcome to the Account Appointments Dashboard. Please
                      select any of the options below to get started.
                    </h5>
                  </MDBCardText>

                  <MDBRow center className="mt-5">
                    <MDBCol className="p-2" md="4">
                      {/* <a onClick={} href="Admin/Users"> */}
                      <a href="/Appointment/New">
                        <MDBCard wide cascade>
                          <MDBCardBody cascade className="text-center">
                            <MDBCardTitle className="card-title">
                              <MDBIcon
                                size="2x"
                                className="blue-text"
                                icon="check-square"
                              />
                            </MDBCardTitle>
                            <hr />
                            <MDBCardTitle>
                              <b>New Appointment</b>
                            </MDBCardTitle>
                          </MDBCardBody>
                        </MDBCard>
                      </a>
                    </MDBCol>
                    <MDBCol className="p-2" md="4">
                      <a href="#appointments">
                        <MDBCard wide cascade>
                          <MDBCardBody cascade className="text-center">
                            <MDBCardTitle className="card-title">
                              <MDBIcon
                                size="2x"
                                className="green-text"
                                icon="clock"
                              />
                            </MDBCardTitle>
                            <hr />
                            <MDBCardTitle>
                              <b>Recent Appointments</b>
                            </MDBCardTitle>
                          </MDBCardBody>
                        </MDBCard>
                      </a>
                    </MDBCol>
                    <MDBCol className="p-2" md="4">
                      <a
                        href="/Dashboard"
                        onClick={() => alert("This feature is coming soon!")}
                      >
                        <MDBCard wide cascade>
                          <MDBCardBody cascade className="text-center">
                            <MDBCardTitle className="card-title">
                              <MDBIcon
                                size="2x"
                                className="red-text"
                                icon="running"
                              />
                            </MDBCardTitle>
                            <hr />
                            <MDBCardTitle>
                              <b>Missed Appointments</b>
                            </MDBCardTitle>
                          </MDBCardBody>
                        </MDBCard>
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div id="appointments"></div>
        <RecentAppointmentsTable />
      </MDBView>
    </div>
  );
};

export default Dashboard;
