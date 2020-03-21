<template>
  <section class="vw-100 vh-100 d-flex flex-column flex-fill">
    <navbar
      :logo="require('@/assets/images/logo-login.png').default"
      :menu="menu"
    />
    <div class="p-5">
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
        { title: "ENCOMENDAS", href: "#" },
        { title: "ENTREGADORES", href: "#" },
        { title: "DESTINATÁRIOS", href: "#" },
        { title: "PROBLEMAS", href: "#" }
      ];
    }
  },
  mounted() {
    // console.log("entrei");
  }
};
</script>
