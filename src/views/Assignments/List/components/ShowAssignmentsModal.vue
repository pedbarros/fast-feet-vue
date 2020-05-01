<template>
  <b-modal id="show-assignments-modal">
    <div class="p-2">
      <h5>Informações da encomenda</h5>
      <span class="d-block"
        >{{ assignment.recipient.street }},
        {{ assignment.recipient.state }}</span
      >

      <hr />

      <h5>Datas</h5>
      <span class="d-block"><b>Retirada: </b>25/01/2020</span>
      <span class="d-block"><b>Entrega: </b>25/01/2020</span>

      <hr />

      <h5>Assinatura do destinatário</h5>
      <div class="text-center p-4">
        <b-img
          fluid
          width="234"
          height="36"
          src="@/assets/images/signature-of-recipient.png"
        ></b-img>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "ShowAssignmentsModal",
  props: {
    assignment: {
      type: Object,
      required: true
    }
  }
};
</script>
