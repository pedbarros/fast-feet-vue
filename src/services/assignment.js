import axiosFF from "./api";

export default {
  get(params = []) {
    let url = "assignments?";
    params.forEach(p => {
      url += `&${p.key}=${p.value}`;
    });
    return axiosFF.get(url).then(res => res.data);
  },
  create({ recipient_id, delivery_man_id, product_name }) {
    return axiosFF
      .post("assignments", {
        recipient_id,
        delivery_man_id,
        product_name
      })
      .then(res => res.data);
  },
  delete: id => axiosFF.delete(`assignments/${id}`)
};
