<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando encomendas</h4>
    <div class="d-flex justify-content-between my-4">
      <div>
        <b-form-input placeholder="Buscar por encomendas"></b-form-input>
      </div>
      <b-button class="btn-save" variant="primary">
        <b-icon-plus></b-icon-plus>
        CADASTRAR
      </b-button>
    </div>

    <div>
      <b-table
        :responsive="true"
        :hover="true"
        :fields="fields"
        :items="items"
        fixed
      >
        <template v-slot:cell(status)="data">
          <b-badge pill :variant="badgeVariant(data.item.status)">{{
            data.item.status
          }}</b-badge>
        </template>
        <template v-slot:cell(acoes)>
          <b-dropdown id="dropdown-1">
            <b-dropdown-item
              ><b-icon-plus></b-icon-plus>Visualizar</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon-plus></b-icon-plus>Editar</b-dropdown-item
            >
            <b-dropdown-item
              ><b-icon-plus></b-icon-plus>Excluir</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Assignments",
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
    },
    onLogin() {
      // console.log("ok");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-save {
  background: #7d40e7;
}
</style>
