export default {
	name: 'layout-hash',
  props: ['hash'],
  data: function () {
    return {}
  },
	computed: {
    vote: function () {
      return this.$store.state.votesPreview.data.find(item => item.TYP === 1);
    },
    tips: function () {
      return this.$store.state.votesPreview.data.filter(item => item.TYP === 0);
    },
    tipsSorted: function () {
      return this.tips.sort((a, b) => this.region(a.OBVOD).OBVOD_NAZEV > this.region(b.OBVOD).OBVOD_NAZEV);
    },
    title: function () {
      return "Tip na výsledek a hlasování nanečisto";
    }
  },
  methods: {
    candidate: function (id) {
      return this.$store.state.listOfCandidates.find(item => item.ID === id);
    },
    region: function (id) {
      return this.$store.state.enum.find(item => item.ID === id);
    },
    fetch: function () {
      window.scrollTo(0, 0);
      if (this.$store.state.votes.modal.show === true) this.$store.commit("modal", {show: false});
      if (this.hash) this.$store.dispatch("fetchVotesPreview", this.hash);
      this.$store.dispatch("ga", {path: "hlasovani/" + this.hash, title: "Hlasovací lístek: " + this.hash});
    },
    link: function () {
      return "https://senat18.programydovoleb.cz/hlasovani/" + this.hash;
    },
    outbound: function (type) {

      var path = "hlasovani/" + this.hash + "/share/" + type;
      var title = "Hlasování '" + this.hash + "' byla sdílena na " + type;

      this.$store.dispatch("ga", {path: path, title: title});
    }
  },
  mounted: function () {
    this.fetch();
  },
  watch: {
    hash: function () {
      this.fetch();
    }
  }
};

