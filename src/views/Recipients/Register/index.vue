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
            v-model="form.nome"
            required
            placeholder="John Doe"
          ></b-form-input>
        </b-form-group>

        <div class="d-flex">
          <b-form-group
            class="text-dark font-weight-bold flex-grow-1 mr-2"
            label="Rua"
            label-for="input-rua"
          >
            <b-form-input
              id="input-rua"
              v-model="form.rua"
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
              v-model="form.numero"
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
              v-model="form.complemento"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="d-flex">
          <b-form-group
            class="text-dark font-weight-bold flex-grow-1 mr-2"
            label="Cidade"
            label-for="input-cidade"
          >
            <b-form-input
              id="input-cidade"
              v-model="form.cidade"
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
              v-model="form.estado"
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
import { CepService } from "@/services";
export default {
  name: "RegisterRecipient",
  data() {
    return {
      form: {
        nome: null,
        rua: null,
        numero: null,
        complemento: null,
        cidade: null,
        estado: null,
        cep: null
      }
    };
  },
  watch: {
    "form.cep": {
      handler(value) {
        CepService.getLocation(value).then(res => {
          const response = res.data;
          this.form.rua = response.logradouro;
          this.form.complemento = response.complemento;
          this.form.cidade = response.localidade;
          this.form.estado = response.uf;
          this.form.cep = response.cep;
        });
      },
      deep: true
    }
  },
  methods: {
    saveRecipient() {
      // console.log(this.form);
    }
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
  }
  margin: 0 auto;
  .register-card {
    border-radius: 4px;
  }
}
</style>
