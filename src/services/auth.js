import axiosFF from "./api";

export default {
  me() {
    return axiosFF.get("sessions");
  },
  login({ email, password }) {
    return axiosFF.post("sessions", {
      email,
      password
    });
  },
  signUp({ name, email, password, admin = false }) {
    return axiosFF.post("users", {
      name,
      email,
      password,
      admin
    });
  }
};
