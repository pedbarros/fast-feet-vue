import { authService } from "@/services";

export default {
  me({ commit }) {
    return authService.me().then(res => {
      commit("SET_LOGGED_USER", res.data);
      return res;
    });
  }
};
