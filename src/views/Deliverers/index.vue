<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando entregadores</h4>

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
        @click="$router.push({ name: 'RegisterDelivery' })"
      >
        <b-icon-plus></b-icon-plus>
        CADASTRAR
      </b-button>
    </div>

    <div>
      <b-table :responsive="true" :hover="true" :fields="fields" :items="items">
        <template v-slot:cell(image)="data">
          <b-img
            rounded="circle"
            width="35"
            height="35"
            :src="data.item.image"
          ></b-img>
        </template>
        <template v-slot:cell(acoes)="data">
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item
              @click="
                $router.push({
                  name: 'RegisterDelivery',
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
  </section>
</template>

<script>
export default {
  name: "Deliverers",
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "image", label: "Imagem" },
        { key: "nome", label: "Nome" },
        { key: "email", label: "Email" },
        { key: "acoes", label: "Ações" }
      ],
      items: [
        {
          id: "#01",
          image: "https://ui-avatars.com/api/?name=John Doe",
          nome: "John Doe",
          email: "example@pedbarros.com.br"
        },
        {
          id: "#02",
          image: "https://ui-avatars.com/api/?name=Pedro Barros",
          nome: "Pedro Barros",
          email: "example@pedbarros.com.br"
        },
        {
          id: "#03",
          image: "https://ui-avatars.com/api/?name=Camila Soares",
          nome: "Camila Soares",
          email: "example@pedbarros.com.br"
        },
        {
          id: "#04",
          image: "https://ui-avatars.com/api/?name=John Doe",
          nome: "John Doe",
          email: "example@pedbarros.com.br"
        }
      ]
    };
  }
};
</script>
