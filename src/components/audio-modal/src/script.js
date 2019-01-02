export default {
	name: 'vote-modal',
	props: ['program', 'region', 'changeTo'],
  data: function () {
    return {}
  },
	computed: {
    link: function () {
      return "https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky/kandidat-na-senatora?" + this.region.OBVOD + "_" + this.program.CISLO;
    },
  },
  methods: {
    ga: function () {

      var path = "kandidat/" + this.program.ID + "/link/audio";
      var title = this.program.CELEJMENO + " - audio";

      this.$store.dispatch("ga", {path: path , title: title});
    },
    next: function () {
      var index = this.$store.state.programs.indexOf(this.program);

      index += 1;

      if (index === this.$store.state.programs.length) index = 0;

      this.changeTo(this.$store.state.programs[index]);
    }
  },
  mounted: function () {
    this.ga();
  },
  watch: {
    program: function () {
      this.ga();
    }
  }
};

