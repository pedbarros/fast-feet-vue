<template>
  <section class="d-flex flex-column delivery-container">
    <div class="d-flex flex-column flex-lg-row justify-content-between">
      <div>
        <h4>Cadastro de destinatário</h4>
      </div>
      <div>
        <b-button
          class="mt-3 mr-2 mt-sm-0 text-white"
          variant="secondary"
          @click="$router.back()"
        >
          <b-icon-plus></b-icon-plus>
          VOLTAR
        </b-button>
        <b-button class="mt-3 mt-sm-0" variant="primary" @click="saveRecipient">
          <b-icon-plus></b-icon-plus>
          SALVAR
        </b-button>
      </div>
    </div>

    <div class="card register-card w-100 align-self-center mt-3 p-3 p-sm-4">
      <b-form>
        <b-form-group
          class="text-dark font-weight-bold"
          label="Nome"
          label-for="input-nome"
        >
          <b-form-input
            id="input-nome"
            v-model="form.name"
            required
            placeholder="John Doe"
          ></b-form-input>
        </b-form-group>

        <div class="d-flex flex-column flex-lg-row">
          <b-form-group
            class="text-dark font-weight-bold flex-grow-1 mr-2"
            label="Rua"
            label-for="input-rua"
          >
            <b-form-input
              id="input-rua"
              v-model="form.street"
              required
              placeholder="Rua Beethoven"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="text-dark font-weight-bold mr-2"
            label="Número"
            label-for="input-numero"
          >
            <b-form-input
              id="input-numero"
              v-model="form.number"
              required
              placeholder="1729"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="text-dark font-weight-bold"
            label="Complemento"
            label-for="input-complemento"
          >
            <b-form-input
              id="input-complemento"
              v-model="form.complement"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="d-flex flex-column flex-lg-row">
          <b-form-group
            class="text-dark font-weight-bold flex-grow-1 mr-2"
            label="Cidade"
            label-for="input-cidade"
          >
            <b-form-input
              id="input-cidade"
              v-model="form.city"
              required
              placeholder="Diadema"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="text-dark font-weight-bold mr-2"
            label="Estado"
            label-for="input-estado"
          >
            <b-form-input
              id="input-estado"
              v-model="form.state"
              required
              placeholder="São Paulo"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="text-dark font-weight-bold"
            label="CEP"
            label-for="input-cep"
          >
            <b-form-input
              id="input-cep"
              v-model="form.cep"
              debounce="1000"
              required
              placeholder="09960-580"
            ></b-form-input>
          </b-form-group>
        </div>
      </b-form>
    </div>
  </section>
</template>

<script>
import { cepService, recipientService } from "@/services";
export default {
  name: "RegisterRecipient",
  data() {
    return {
      form: {
        name: "Pedro Barros",
        street: "Rua B",
        number: 5935,
        complement: "Sem complemento",
        city: "Maceio",
        state: "AL",
        cep: "57083140",
        status: true
      }
    };
  },
  watch: {
    "form.cep": {
      handler(value) {
        cepService.getLocation(value).then(res => {
          const response = res.data;
          this.form.street = response.logradouro;
          this.form.complement = response.complemento;
          this.form.city = response.localidade;
          this.form.state = response.uf;
          this.form.cep = response.cep;
        });
      },
      deep: true
    }
  },
  methods: {
    async saveRecipient() {
      const res = await recipientService.create(this.form);
      if (res) this.$router.push({ name: "ListRecipients" });
    }
  }
};
</script>

<style lang="scss" scoped>
.delivery-container {
  width: 65%;
  // height: 401px;
  margin: 0 auto;

  @media (max-width: 604px) {
    width: 90%;
    height: 100%;
  }
  .image-upload {
    width: 150px;
    height: 150px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px dashed #dddddd;
  }
  .register-card {
    border-radius: 4px;
  }
}
</style>
