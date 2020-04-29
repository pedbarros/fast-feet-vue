<template>
  <div
    class="bg-primary p-3 vw-100 vh-100 d-flex justify-content-center align-content-center"
  >
    <div class="card login-card align-self-center p-3 p-sm-4">
      <b-img-lazy class="my-3" fluid src="@/assets/images/logo-login.png" />

      <b-form @submit="onLogin">
        <b-form-group
          class="text-dark font-weight-bold"
          label="SEU E-MAIL"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            required
            placeholder="exemplo@email.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-dark font-weight-bold"
          label="SUA SENHA"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            required
            placeholder="*************"
          ></b-form-input>
        </b-form-group>

        <b-button block variant="primary" class="p-2 mt-4" @click="onLogin()"
          >Entrar no sistema</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    onLogin() {
      this.$router.push({ name: "ListAssignments" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-card {
  width: 360px;
  height: 425px;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
}
</style>
