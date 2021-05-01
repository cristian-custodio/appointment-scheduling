import http from "./httpService";

const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
}

export function getAllUsers() {
  return http.get(apiEndpoint + "/all")
}

