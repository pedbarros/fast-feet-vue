<template>
  <b-modal id="show-problems-modal">
    <div class="p-2">
      <h5>VISUALIZAR PROBLEMA</h5>
      <span class="d-block">{{ problem.description }}</span>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "ShowProblemsModal",
  props: {
    problem: {
      type: Object,
      required: true
    }
  }
};
</script>
