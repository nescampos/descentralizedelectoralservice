<template>
  <div>
    <SpH3> List of Elections </SpH3>
    <div v-for="election in elections" v-bind:key="'election' + election.id">
      <SpH3> {{election.id}}. {{ election.title }} </SpH3>
      <app-radio-item
        @click="submit(election.id, candidate)"
        v-for="candidate in election.candidates"
        v-bind:key="candidate"
        :value="candidate"
      />
      <app-text type="subtitle">Results: {{ results(election.id) }}</app-text>
    </div>
  </div>
</template>
<style>
.candidate-radio > .button {
  height: 40px;
  width: 50%;
}
</style>

<script>
import AppRadioItem from "./AppRadioItem";
import AppText from "./AppText";
import { countBy } from "lodash";

export default {
  components: { AppText, AppRadioItem },
  data() {
    return {
      selected: "",
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
    },
    elections() {
      return (
        this.$store.getters["nescampos.des.des/getElectionAll"]({
          params: {}
        })?.Election ?? []
      );
    },
    votes() {
      return (
        this.$store.getters["nescampos.des.des/getVoteAll"]({
          params: {}
        })?.Vote ?? []
      );
    },
  },
  methods: {
    results(id) {
      const results = this.votes.filter((v) => v.electionID === id);
      return countBy(results, "candidate");
    },
    async submit(electionID, candidate) {
      
      const value = { creator: this.currentAccount, electionID, candidate };
      await this.$store.dispatch("nescampos.des.des/sendMsgCreateVote", {
        value,
        fee: [],
      });
      await this.$store.dispatch("nescampos.des.des/QueryElectionAll", {
        candidates: { subscribe: true, all: true },
        params: {},
      });
    },
  },
};
</script>
