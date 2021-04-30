import http from "./httpService";

const apiEndPoint = "/appointments";

export function getAllAppointments() {
  return http.get(apiEndPoint + "/");
}


export function registerAppointment(json) {
  return http.post(apiEndPoint, json, {
    headers: { "Content-Type": "application/json" },
  });
}
