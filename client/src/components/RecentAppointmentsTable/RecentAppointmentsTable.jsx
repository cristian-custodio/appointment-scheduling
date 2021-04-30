import React, { useState, useEffect, useContext, Fragment } from "react";
import UserContext from "../../context/userContext";
import { getAllAppointments } from "../../services/appointmentService";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBDataTableV5,
  MDBBadge,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

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
                <MDBCol>
                  <strong style={{ color: "blue", fontSize: "1.5em" }}>
                    Pending
                  </strong>
                </MDBCol>
              </MDBRow>

              <Fragment>
                <MDBBtn rounded color="primary">
                  Confirm
                </MDBBtn>
                <MDBBtn rounded color="danger">
                  Decline
                </MDBBtn>
              </Fragment>
            </div>
          ) : data[appointment].data.Status === "confirmed" ? (
            <strong style={{ color: "green" }}>Confirmed</strong>
          ) : data[appointment].data.Status === "cancelled" ? (
            <strong style={{ color: "red" }}>Cancelled</strong>
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
