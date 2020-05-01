<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="bg-white"
      fixed="top"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <b-navbar-brand :to="{ name: 'ListAssignments' }">
        <b-img-lazy fluid :src="logo" width="40" height="40" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="(m, index) in menu" :key="index" :to="m.to">{{
            m.title
          }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-badge variant="success" style="font-size: 15px">{{
              domainTarget
            }}</b-badge>
          </b-nav-form> -->

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Admin FastFeet</em>
            </template>
            <b-dropdown-item @click="logout">Sair do sistema</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import axios from "axios";
// import xml2js from "xml2js";
import { tokenHelper } from "@/helpers";
export default {
  inheritAttrs: false,
  data() {
    return {
      domainTarget: ""
    };
  },
  props: {
    logo: {
      type: String,
      default: require("@/assets/images/quick-delivery.png")
    },
    menu: {
      type: Array,
      required: true
    }
  },
  methods: {
    logout() {
      tokenHelper.removeToken();
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    /*axios("https://www.whoisxmlapi.com/whoisserver/DNSService", {
      method: "GET",
      mode: "no-cors",
      params: {
        apiKey: "at_ZzUtyDJdMEt7BPqravqwgWYOtoD9S",
        domainName: "members.pedbarros.com.br",
        type: "_all",
        output_format: "json"
      }
    }).then(res => {
      xml2js.parseString(res.data, (err, result) => {
        const dns = result.DNSData.dnsRecords.filter(rec =>
          rec.CNAMERecord.some(sub_mod =>
            sub_mod.target.includes("pedbarros.myedools.info.")
          )
        );
        this.domainTarget = dns[0].CNAMERecord[0].target[0];
      });
    });*/
  }
};
</script>
