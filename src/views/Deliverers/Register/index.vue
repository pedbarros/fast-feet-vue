<template>
  <section class="d-flex flex-column delivery-container">
    <div class="d-flex flex-column flex-sm-row justify-content-between">
      <div>
        <h4>Gerenciando entregadores</h4>
      </div>
      <div>
        <b-button class="mt-3 mr-2 mt-sm-0 text-white" variant="secondary">
          <b-icon-plus></b-icon-plus>
          VOLTAR
        </b-button>
        <b-button class="mt-3 mt-sm-0" variant="primary">
          <b-icon-plus></b-icon-plus>
          SALVAR
        </b-button>
      </div>
    </div>

    <div class="card register-card w-100 align-self-center mt-3 p-3 p-sm-4">
      <div class="d-flex justify-content-center">
        <div
          class="image-upload d-flex flex-column justify-content-center rounded-circle"
          @click="$refs.file.click()"
        >
          <template v-if="form.imageBase64">
            <img
              :src="`data:image/jpeg;base64,${form.imageBase64}`"
              alt="Avatar"
              style="border-radius:10px;"
            />
          </template>
          <template v-else>
            <b-icon-image
              class="align-self-center text-secondary"
              font-scale="4"
            ></b-icon-image>
            <span class="d-block text-secondary align-self-center"
              >Adicionar foto</span
            >
          </template>

          <input
            ref="file"
            type="file"
            multiple
            @change="onImageChange($event)"
            accept="image/*"
            style="display: none"
          />
        </div>
      </div>

      <b-form>
        <b-form-group
          class="text-dark font-weight-bold"
          label="Nome"
          label-for="input-nome"
        >
          <b-form-input
            id="input-nome"
            v-model="form.nome"
            required
            placeholder="John Doe"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-dark font-weight-bold"
          label="Email"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            required
            placeholder="*************"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterDeliverers",
  data() {
    return {
      form: {
        nome: null,
        email: null,
        imageBase64: null
      }
    };
  },
  methods: {
    onImageChange(e) {
      let self = this;
      let image = e.target.files || e.dataTransfer.files;
      let reader = new FileReader();
      reader.readAsBinaryString(image[0]);

      reader.onload = function() {
        self.form.imageBase64 = btoa(reader.result);
      };
      reader.onerror = function() {
        self.form.imageBase64 = null;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-container {
  width: 900px;
  height: 401px;

  @media (max-width: 960px) {
    width: 500px;
    height: 200px;
  }

  @media (max-width: 692px) {
    width: 400px;
    height: 100px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }

  .image-upload {
    width: 150px;
    height: 150px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px dashed #dddddd;
  }

  margin: 0 auto;
  .register-card {
    border-radius: 4px;
  }
}
</style>
