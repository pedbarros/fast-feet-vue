import axiosFF from "./api";

export default {
  create: image => axiosFF.post("files", image).then(res => res.data)
};
