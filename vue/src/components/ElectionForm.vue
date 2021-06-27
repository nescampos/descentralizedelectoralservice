<template>
  <div>
    <div class="sp-des__main sp-box sp-shadow sp-form-group">
        <form class="sp-des__main__form">
          <div class="sp-des__main__rcpt__header sp-box-header">
            Create new Election
          </div>

          <input class="sp-input" placeholder="Title" v-model="title" />
          <div v-for="(candidate, index) in candidates" v-bind:key="'candidate' + index">
            <input class="sp-input" placeholder="Candidate" v-model="candidate.title" />
          </div>
          <sp-button @click="add">+ Add candidate</sp-button>
          <sp-button @click="submit">Create election</sp-button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElectionForm",
  data() {
    return {
      title: "",
      candidates: [{
        title: "",
      }],
    };
  },
  computed: {

    currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters['common/wallet/address']
        } else {
          return null
        }
      } else {
        return null
      }
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/loggedIn']
      } else {
        return false
      }
    }
  },
  methods: {
    add() {
      this.candidates = [...this.candidates, { title: "" }];
    },
    async submit() {
      const value = {
        creator: this.currentAccount,
        title: this.title,
        candidates: this.candidates.map((o) => o.title),
      };
      await this.$store.dispatch("nescampos.des.des/sendMsgCreateElection", {
        value,
        fee: [],
      });
    },
  },
};

</script>