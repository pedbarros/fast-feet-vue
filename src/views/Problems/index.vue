<template>
  <section class="d-flex flex-column">
    <h4>Problemas na entrega</h4>

    <div class="mt-4">
      <b-table :responsive="true" :hover="true" :fields="fields" :items="items">
        <template v-slot:cell(acoes)>
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item v-b-modal.show-problems-modal
              ><b-icon-eye></b-icon-eye> Visualizar</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon-trash></b-icon-trash> Cancelar encomenda</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
    <show-problems-modal />
  </section>
</template>

<script>
export default {
  name: "Problems",
  components: {
    ShowProblemsModal: () => import("./components/ShowProblemsModal")
  },
  data() {
    return {
      fields: [
        { key: "encomenda", label: "Encomenda" },
        { key: "problema", label: "Problema" },
        { key: "acoes", label: "Ações" }
      ],
      items: [
        {
          encomenda: "#01",
          problema:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus…"
        },
        {
          encomenda: "#02",
          problema: "Destinatário ausente"
        },
        {
          encomenda: "#03",
          problema: "Carga roubada"
        },
        {
          encomenda: "#04",
          problema: "Destinatário ausente"
        }
      ]
    };
  }
};
</script>
