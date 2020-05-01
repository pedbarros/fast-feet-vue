<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando destinatários</h4>

    <div class="d-flex flex-column flex-sm-row justify-content-between my-4">
      <div>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            placeholder="Buscar por destinatários"
            v-model="search"
            debounce="1000"
          ></b-form-input>
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
      <div class="d-flex justify-content-center" v-if="isLoading">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <b-table
        :responsive="true"
        :hover="true"
        :fields="fields"
        :items="recipients"
        v-else
      >
        <template v-slot:cell(address)="data">
          <span
            >{{ data.item.street }}, {{ data.item.number }},
            {{ data.item.city }} - {{ data.item.state }}</span
          >
        </template>
        <template v-slot:cell(acoes)>
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item>
              <b-icon-pencil></b-icon-pencil> Editar
            </b-dropdown-item>
            <b-dropdown-item>
              <b-icon-trash></b-icon-trash> Excluir
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import { recipientService } from "@/services";
export default {
  name: "Recipients",
  data() {
    return {
      isLoading: true,
      search: "",
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Nome" },
        { key: "address", label: "Endereço" },
        { key: "acoes", label: "Ações" }
      ],
      recipients: []
    };
  },
  watch: {
    async search(value) {
      const recipients = await recipientService.get([{ key: "name", value }]);
      this.recipients = recipients;
    }
  },
  async mounted() {
    this.isLoading = true;
    const recipients = await recipientService.get();
    this.recipients = recipients;
    this.isLoading = false;
  }
};
</script>
