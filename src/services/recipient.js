import axiosFF from "./api";

export default {
  get() {
    return axiosFF.get("recipients").then(res => res.data);
  }
};
