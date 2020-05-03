<template>
  <section class="d-flex flex-column delivery-container">
    <div class="d-flex flex-column flex-lg-row justify-content-between">
      <div>
        <h4>Cadastro de entregadores</h4>
      </div>
      <div>
        <b-button class="mt-3 mr-2 mt-sm-0 text-white" variant="secondary">
          <b-icon-plus></b-icon-plus>
          VOLTAR
        </b-button>
        <b-button class="mt-3 mt-sm-0" variant="primary" @click="saveDelivery">
          <b-icon-plus></b-icon-plus>
          SALVAR
        </b-button>
      </div>
    </div>

    <div class="card register-card w-100 align-self-center mt-3 p-3 p-sm-4">
      <b-form>
        <div class="d-flex justify-content-center">
          <div
            class="image-upload d-flex flex-column justify-content-center rounded-circle"
            @click="$refs.file.click()"
          >
            <template v-if="form.image">
              <b-img-lazy
                height="150"
                width="150"
                class="rounded-circle"
                :src="form.image"
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
            placeholder="meumelhoremail@email.com"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </section>
</template>

<script>
import { delivererService, fileService } from "@/services";
export default {
  name: "RegisterDeliverers",
  data() {
    return {
      form: {
        name: null,
        email: null,
        image: null
      }
    };
  },
  methods: {
    async onImageChange(e) {
      let file = e.target.files || e.dataTransfer.files;
      let formData = new FormData();

      formData.append("file", file[0]);
      const image = await fileService.create(formData);
      this.form.image = image.url;
      this.$forceUpdate();
      console.log(this.form.image);
    },
    saveDelivery() {
      delivererService;
      alert(JSON.stringify(this.form));
    }
  },
  mounted() {
    this.form = { ...this.$route.params.data };
  }
};
</script>

<style lang="scss" scoped>
.delivery-container {
  width: 65%;
  height: 401px;

  @media (max-width: 604px) {
    width: 90%;
  }
  .image-upload {
    width: 150px;
    height: 150px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px dashed #dddddd;
    cursor: pointer;
  }
  margin: 0 auto;
  .register-card {
    border-radius: 4px;
  }
}
</style>
