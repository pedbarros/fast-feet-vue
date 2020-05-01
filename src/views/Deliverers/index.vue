<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando entregadores</h4>

    <div class="d-flex flex-column flex-sm-row justify-content-between my-4">
      <div>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            placeholder="Buscar por entregadores"
            v-model="search"
            debounce="1000"
          ></b-form-input>
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
      <div class="d-flex justify-content-center" v-if="isLoading">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <b-table
        :responsive="true"
        :hover="true"
        :fields="fields"
        :items="deliverers"
        v-else
      >
        <template v-slot:cell(image)="data">
          <b-img
            rounded="circle"
            width="35"
            height="35"
            :src="`https://ui-avatars.com/api/?name=${data.item.name}`"
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
import { delivererService } from "@/services";
import { toastHelper } from "@/helpers";
export default {
  name: "Deliverers",
  data() {
    return {
      isLoading: true,
      search: "",
      fields: [
        { key: "id", label: "ID" },
        { key: "image", label: "Imagem" },
        { key: "name", label: "Nome" },
        { key: "email", label: "Email" },
        { key: "acoes", label: "Ações" }
      ],
      deliverers: []
    };
  },
  methods: {
    async getDelivers(params = []) {
      this.isLoading = true;
      try {
        const deliverers = await delivererService.get(params);
        this.deliverers = deliverers;
      } catch (error) {
        toastHelper.dangerMessage("Ocorreu um erro!", {
          variant: "danger",
          solid: true
        });
      } finally {
        this.isLoading = false;
      }
    }
  },
  watch: {
    async search(value) {
      this.getDelivers([{ key: "name", value }]);
    }
  },
  async mounted() {
    this.getDelivers();
  }
};
</script>
