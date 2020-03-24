<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando encomendas</h4>

    <div class="d-flex flex-column flex-sm-row justify-content-between my-4">
      <div>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
          <b-form-input placeholder="Buscar por encomendas"></b-form-input>
        </b-input-group>
      </div>
      <b-button
        class="mt-3 mt-sm-0"
        variant="primary"
        @click="$router.push({ name: 'RegisterAssignment' })"
      >
        <b-icon-plus></b-icon-plus>
        CADASTRAR
      </b-button>
    </div>

    <div>
      <b-table :responsive="true" :hover="true" :fields="fields" :items="items">
        <template v-slot:cell(entregador)="data">
          <b-img
            rounded="circle"
            width="35"
            height="35"
            :src="`https://ui-avatars.com/api/?name=${data.item.entregador}`"
          ></b-img>
          {{ data.item.entregador }}
        </template>
        <template v-slot:cell(status)="data">
          <b-badge pill :variant="badgeVariant(data.item.status)">
            <b-icon-circle-fill></b-icon-circle-fill>
            {{ data.item.status }}</b-badge
          >
        </template>
        <template v-slot:cell(acoes)="data">
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item v-b-modal.show-assignments-modal
              ><b-icon-eye></b-icon-eye> Visualizar</b-dropdown-item
            >
            <b-dropdown-item
              @click="
                $router.push({
                  name: 'RegisterAssignment',
                  params: { data: data.item }
                })
              "
            >
              <b-icon-pencil></b-icon-pencil> Editar</b-dropdown-item
            >
            <b-dropdown-item
              ><b-icon-trash></b-icon-trash> Excluir</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
    <show-assignments-modal />
  </section>
</template>

<script>
export default {
  name: "Assignments",
  components: {
    ShowAssignmentsModal: () => import("./components/ShowAssignmentsModal")
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "destinarario", label: "Destinatário" },
        { key: "entregador", label: "Entregador" },
        { key: "cidade", label: "Cidade" },
        { key: "estado", label: "Estado" },
        { key: "status", label: "Status" },
        { key: "acoes", label: "Ações" }
      ],
      items: [
        {
          id: "#01",
          destinarario: "Ludwig van Beethoven",
          entregador: "Macdonald",
          cidade: "Rio do Sul",
          estado: "Santa Catarina",
          status: "RETIRADA"
        },
        {
          id: "#02",
          destinarario: "Dickerson",
          entregador: "Gaspar Antunes",
          cidade: "Rio do Sul",
          estado: "Santa Catarina",
          status: "ENTREGUE"
        },
        {
          id: "#03",
          destinarario: "Antonio Vivaldi",
          entregador: "Macdonald",
          cidade: "Rio do Sul",
          estado: "Santa Catarina",
          status: "ENTREGUE"
        },
        {
          id: "#04",
          destinarario: "Piotr Ilitch Tchaikovski",
          entregador: "Rosetta Castro",
          cidade: "Rio do Sul",
          estado: "Santa Catarina",
          status: "CANCELADA"
        }
      ]
    };
  },
  methods: {
    badgeVariant(status) {
      if (status === "ENTREGUE") return "success";
      else if (status === "RETIRADA") return "info";
      else if (status === "CANCELADA") return "danger";
    }
  }
};
</script>
