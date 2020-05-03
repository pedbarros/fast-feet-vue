<template>
  <section class="d-flex flex-column">
    <h4>Gerenciando encomendas</h4>

    <div class="d-flex flex-column flex-sm-row justify-content-end my-4">
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
      <div class="d-flex justify-content-center" v-if="isLoading">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <b-table
        :responsive="true"
        :hover="true"
        :fields="fields"
        :items="assignments"
        v-else
      >
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
            <div class="d-flex align-items-center">
              <b-icon-circle-fill></b-icon-circle-fill>
              <span class="ml-1" style="font-size: 15px">{{
                data.item.status | statusText
              }}</span>
            </div>
          </b-badge>
        </template>
        <template v-slot:cell(acoes)="data">
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item
              @click="
                selectedAssignment = data.item;
                $bvModal.show('show-assignments-modal');
              "
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
            <b-dropdown-item @click="deleteAssignment(data.item)"
              ><b-icon-trash></b-icon-trash> Excluir</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
    <show-assignments-modal
      v-if="selectedAssignment"
      :assignment="selectedAssignment"
    />
  </section>
</template>

<script>
import { assignmentService } from "@/services";
export default {
  name: "Assignments",
  components: {
    ShowAssignmentsModal: () => import("./components/ShowAssignmentsModal")
  },
  data() {
    return {
      isLoading: true,
      selectedAssignment: null,
      fields: [
        { key: "id", label: "ID" },
        { key: "recipient.name", label: "Destinatário" },
        { key: "entregador", label: "Entregador" },
        { key: "recipient.street", label: "Cidade" },
        { key: "recipient.state", label: "Estado" },
        { key: "status", label: "Status" },
        { key: "acoes", label: "Ações" }
      ],
      assignments: []
    };
  },
  filters: {
    statusText(value) {
      if (!value) return "";
      if (value === "delivered") return "ENTREGUE";
      else if (value === "withdrawal") return "RETIRADA";
      else if (value === "canceled") return "CANCELADO";
      else if (value === "ongoing") return "EM PROCESSO";
    }
  },
  methods: {
    async deleteAssignment(assignment) {
      try {
        let assignmentIndex = this.assignments.findIndex(
          item => item.id === assignment.id
        );

        await assignmentService.delete(assignment.id);
        this.assignments.splice(assignmentIndex, 1);

        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
    badgeVariant(status) {
      if (status === "delivered") return "success";
      else if (status === "withdrawal") return "info";
      else if (status === "canceled") return "danger";
      return "primary";
    }
  },
  async mounted() {
    this.isLoading = true;
    const assignments = await assignmentService.get();
    this.assignments = assignments;
    this.isLoading = false;
  }
};
</script>
