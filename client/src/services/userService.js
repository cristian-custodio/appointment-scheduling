import http from "./httpService";

const apiEndpoint = "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    repId: user.repId,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    registerToken: user.registerToken,
  });
}
