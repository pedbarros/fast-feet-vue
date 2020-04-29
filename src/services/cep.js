import axios from "axios";

export default {
  getLocation(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      mode: "no-cors"
    });
  }
};
