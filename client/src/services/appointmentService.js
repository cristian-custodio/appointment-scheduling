import http from "./httpService";

const apiEndPoint = "/appointments";

export function getAllAppointments() {
  return http.get(apiEndPoint + "/");
}

export function updateAppointmentConfirm(id) {
  return http.post(apiEndPoint + '/confirm/' + id);
}

export function updateAppointmentCancel(id) {
  return http.post(apiEndPoint + '/decline/' + id);
}

export function registerAppointment(json) {
  return http.post(apiEndPoint + "/", json, {
    headers: { "Content-Type": "application/json" },
  });
}
