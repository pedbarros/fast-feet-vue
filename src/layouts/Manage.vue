<template>
  <section class="vw-100 vh-100 d-flex flex-column flex-fill">
    <div>
      <b-navbar toggleable="lg" class="bg-white">
        <b-navbar-brand href="#">
          <b-img-lazy
            fluid
            src="@/assets/images/logo-login.png"
            width="135"
            height="26"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">ENCOMENDAS</b-nav-item>
            <b-nav-item href="#">ENTREGADORES</b-nav-item>
            <b-nav-item href="#">DESTINATÁRIOS</b-nav-item>
            <b-nav-item href="#">PROBLEMAS</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Admin FastFeet</em>
              </template>
              <b-dropdown-item href="#">Sair</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="p-5">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // console.log("entrei");
  }
};
</script>
