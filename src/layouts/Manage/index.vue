<template>
  <section class="d-flex flex-column h-100">
    <navbar
      :logo="require('@/assets/images/logo-login.png').default"
      :menu="menu"
    />
    <div class="manager-container p-3 p-sm-5">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./components/Navbar")
  },
  computed: {
    menu() {
      return [
        { title: "ENCOMENDAS", to: { name: "Assignments" } },
        { title: "ENTREGADORES", to: { name: "ListDeliverers" } },
        { title: "DESTINATÁRIOS", to: { name: "ListRecipients" } },
        { title: "PROBLEMAS", to: { name: "Problems" } }
      ];
    }
  },
  mounted() {
    // console.log("entrei");
  }
};
</script>

<style lang="scss" scoped>
.manager-container {
  margin-top: 70px;
}
</style>
