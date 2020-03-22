<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando destinatários</h4>

    <div class="d-flex flex-column flex-sm-row justify-content-between my-4">
      <div>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
          <b-form-input placeholder="Buscar por entregadores"></b-form-input>
        </b-input-group>
      </div>
      <b-button
        class="mt-3 mt-sm-0"
        variant="primary"
        @click="$router.push({ name: 'RegisterRecipient' })"
      >
        <b-icon-plus></b-icon-plus>
        CADASTRAR
      </b-button>
    </div>

    <div>
      <b-table :responsive="true" :hover="true" :fields="fields" :items="items">
        <template v-slot:cell(acoes)>
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item>
              <b-icon-pencil></b-icon-pencil> Editar</b-dropdown-item
            >
            <b-dropdown-item
              ><b-icon-trash></b-icon-trash> Excluir</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Recipients",
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "nome", label: "Nome" },
        { key: "endereco", label: "Endereço" },
        { key: "acoes", label: "Ações" }
      ],
      items: [
        {
          id: "#01",
          nome: "John Doe",
          endereco: "Rua Beethoven, 1729, Diadema - São Paulo"
        },
        {
          id: "#02",
          nome: "Pedro Barros",
          endereco: "Rua Beethoven, 1729, Diadema - São Paulo"
        },
        {
          id: "#03",
          nome: "Camila Soares",
          endereco: "Rua Beethoven, 1729, Diadema - São Paulo"
        }
      ]
    };
  }
};
</script>
