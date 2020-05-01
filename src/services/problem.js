import axiosFF from "./api";

export default {
  get(params = []) {
    let url = "problems?";
    params.forEach(p => {
      url += `&${p.key}=${p.value}`;
    });
    return axiosFF.get(url).then(res => res.data);
  }
};
