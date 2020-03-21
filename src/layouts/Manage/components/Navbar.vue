<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="bg-white"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <b-navbar-brand href="#">
        <b-img-lazy fluid :src="logo" width="135" height="26" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="(m, index) in menu" :key="index" :to="m.to">{{
            m.title
          }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Admin FastFeet</em>
            </template>
            <b-dropdown-item href="#">Sair do sistema</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    logo: {
      type: String,
      default: require("@/assets/images/logo-login.png")
    },
    menu: {
      type: Array,
      required: true
    }
  }
};
</script>
