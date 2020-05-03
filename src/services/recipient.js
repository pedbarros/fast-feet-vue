import axiosFF from "./api";

export default {
  get(params = []) {
    let url = "recipients?";
    params.forEach(p => {
      url += `&${p.key}=${p.value}`;
    });
    return axiosFF.get(url).then(res => res.data);
  },
  create: payload => axiosFF.post("recipients", payload).then(res => res.data),
  delete: id => axiosFF.delete(`recipients/${id}`)
};
