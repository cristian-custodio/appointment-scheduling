import React, { useState, useEffect, useContext, Fragment } from "react";
import UserContext from "../../context/userContext";
import {
  getAllAppointments,
  updateAppointmentConfirm,
  updateAppointmentCancel,
} from "../../services/appointmentService";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBDataTableV5,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

async function confirmAppointment(appointmentId) {
  //Call service to call firebase function
  let result = updateAppointmentConfirm(appointmentId);
  if (!result) {
    alert("An error has occured");
  } else {
    window.location.reload();
  }
}

async function cancelAppointment(appointmentId) {
  //Call service to call firebase function
  let result = updateAppointmentCancel(appointmentId);
  if (!result) {
    alert("An error has occured");
  } else {
    window.location.reload();
  }
}

const RecentAppointmentsTable = () => {
  const userContext = useContext(UserContext);
  let recentAppointmentsDataInitial = {
    columns: [
      {
        label: "Appointment Date",
        field: "appointmentDate",
        sort: "asc",
      },
      {
        label: "Requester Email",
        field: "requesterEmail",
      },
      {
        label: "Appointment Status",
        field: "appointmentStatus",
      },
    ],
    rows: [],
  };
  const [recentQuoteData, setRecentQuoteData] = useState(
    recentAppointmentsDataInitial
  );

  useEffect(() => {
    async function getAllAppointmentsData() {
      const recentQuotes = await getAllAppointments();
      console.log(recentQuotes.data);

      let filteredAppointments = recentQuotes.data.filter(function (
        appointment
      ) {
        return appointment.data.Owner == userContext.currentUser().email;
      });

      //Filter appointments by logged in user email from recentQuotes.data
      const prepareRecentArray = UpdateStateQuoteData(filteredAppointments);

      //return all appointments
      setRecentQuoteData({ ...recentQuoteData, rows: prepareRecentArray });
    }

    getAllAppointmentsData();
  }, []);

  function UpdateStateQuoteData(data) {
    let recentAppointmentTempRowsArray = [];

    for (const appointment in data) {
      let tempQuote = {
        appointmentDate: data[appointment].data.Date,
        owner: data[appointment].data.Owner,
        requesterEmail: data[appointment].data.Requester,
        appointmentStatus:
          data[appointment].data.Status === "pending" ? (
            <div>
              <MDBRow className="text-center pb-1">
                <MDBCol></MDBCol>
              </MDBRow>

              <Fragment>
                <strong
                  className="mr-2"
                  style={{ color: "blue", fontSize: "1.5em" }}
                >
                  Pending
                </strong>
                <MDBBtn
                  onClick={() => confirmAppointment(data[appointment].id)}
                  tag="a"
                  size="sm"
                  floating
                  gradient="blue"
                  className="mr-2"
                >
                  <MDBIcon icon="check" />
                </MDBBtn>

                <MDBBtn
                  onClick={() => cancelAppointment(data[appointment].id)}
                  tag="a"
                  size="sm"
                  floating
                  gradient="purple"
                >
                  <MDBIcon icon="ban" />
                </MDBBtn>
              </Fragment>
            </div>
          ) : data[appointment].data.Status === "confirmed" ? (
            <div>
              <Fragment>
                <strong className="mr-2" style={{ color: "green" }}>Confirmed</strong>
                <MDBBtn
                  onClick={() => cancelAppointment(data[appointment].id)}
                  tag="a"
                  size="sm"
                  floating
                  gradient="purple"
                >
                  <MDBIcon icon="ban" />
                </MDBBtn>
              </Fragment>
            </div>
          ) : data[appointment].data.Status === "declined" ? (
            <div>
            <Fragment>
              <strong className="mr-3" style={{ color: "red" }}>Declined</strong>
              <MDBBtn
                onClick={() => confirmAppointment(data[appointment].id)}
                tag="a"
                size="sm"
                floating
                gradient="blue"
              >
                <MDBIcon icon="check" />
              </MDBBtn>
            </Fragment>
          </div>
          ) : (
            ""
          ),
      };
      recentAppointmentTempRowsArray.push(tempQuote);
    }

    return recentAppointmentTempRowsArray;
  }

  return (
    <MDBContainer className="pb-5">
      <MDBCard narrow className="text-center">
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0"></i>
            </MDBBtn>
          </div>
          <h5>
            <strong>Recent Appointments</strong>
          </h5>
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-info-circle mt-0"></i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody cascade>
          <hr />
          <MDBDataTableV5
            entriesOptions={[5, 10, 15, 20]}
            materialSearch
            data={recentQuoteData}
            sortable
            btn
            fixed
            entries={5}
            searchLabel="Search Appointments"
            fullPagination={true}
          />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default RecentAppointmentsTable;
