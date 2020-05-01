<template>
  <section class="d-flex flex-column">
    <h4>Problemas na entrega</h4>

    <div class="mt-4">
      <div class="d-flex justify-content-center" v-if="isLoading">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <b-table
        :responsive="true"
        :hover="true"
        :fields="fields"
        :items="problems"
        v-else
      >
        <template v-slot:cell(assignment_id)="data">
          #{{ data.item.assignment_id }}
        </template>

        <template v-slot:cell(acoes)="data">
          <b-dropdown id="dropdown-1" variant="primary">
            <b-dropdown-item @click="show(data.item)"
              ><b-icon-eye></b-icon-eye> Visualizar</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon-trash></b-icon-trash> Cancelar encomenda</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
    </div>
    <show-problems-modal :problem="selectedProblem" />
  </section>
</template>

<script>
import { problemService } from "@/services";
export default {
  name: "Problems",
  components: {
    ShowProblemsModal: () => import("./components/ShowProblemsModal")
  },
  data() {
    return {
      isLoading: true,
      selectedProblem: {},
      fields: [
        { key: "assignment_id", label: "Encomenda" },
        { key: "description", label: "Problema" },
        { key: "acoes", label: "Ações" }
      ],
      problems: []
    };
  },
  methods: {
    show(problem) {
      this.selectedProblem = problem;
      this.$bvModal.show("show-problems-modal");
    }
  },
  async mounted() {
    this.isLoading = true;
    const problems = await problemService.get();
    this.problems = problems;
    this.isLoading = false;
  }
};
</script>
