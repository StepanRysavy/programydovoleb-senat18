export default {
	name: 'layout-candidates',
  props: ['by'],
  data: function () {
    return {
      sortBy: 'party',
      listOfMajorParties: [
        {name: "ANO 2011", short: "ANO", by: "ano"}, 
        {name: "Česká strana sociálně demokratická", short: "ČSSD", by: "cssd"}, 
        {name: "Křesťan.a demokrat.unie-Českosl.strana lidová", short: "KDU-ČSL", by: "kducsl"}, 
        {name: "Komunistická strana Čech a Moravy", short: "KSČM", by: "kscm"}, 
        {name: "Občanská demokratická strana", short: "ODS", by: "ods"}, 
        {name: "Česká pirátská strana", short: "Piráti", by: "pirati"}, 
        {name: "Svoboda a přímá demokracie - Tomio Okamura (SPD)", short: "SPD", by: "spd"}, 
        {name: "STAROSTOVÉ A NEZÁVISLÍ", short: "STAN", by: "stan"},
        {name: "TOP 09", short: "TOP09", by: "top09"}
      ],
      filterBy: 'all'
    }
  },
	computed: {
    listByName: function () {
      return this.$store.state.listOfCandidates;
    },
    listByMinorParty: function () {
      var newRunners = [];
      var reRunners = [];

      this.listByName.forEach(candidate => {

        var valid = !this.listOfMajorParties.find(item => item.name === candidate.STRANAJMENO);

        if (valid === true) {
          if (candidate.OBHAJUJE === 0) {
            newRunners.push(candidate);
          } else {
            reRunners.push(candidate);
          }
        }
      });

      return {
        reRunners: reRunners,
        newRunners: newRunners,
        both: [].concat(reRunners, newRunners),
        wins: [].concat(reRunners, newRunners).filter(item => item.WIN === 1),
        second: [].concat(reRunners, newRunners).filter(item => item.SECOND === 1 && !item.WIN),
      };
    }
  },
    methods: {
      switchFilter (by) {
        this.filterBy = by;
      },
      listOfCandidatesByParty (nameOfGroup) {
        return {
          reRunners: this.listByName.filter(item => item.STRANAJMENO === nameOfGroup && item.OBHAJUJE === 1 && item.SECOND === 1),
          newRunners: this.listByName.filter(item => item.STRANAJMENO === nameOfGroup && item.OBHAJUJE === 0 && item.SECOND === 1),
          both: this.listByName.filter(item => item.STRANAJMENO === nameOfGroup),
          wins: this.listByName.filter(item => item.STRANAJMENO === nameOfGroup && item.WIN === 1),
          second: this.listByName.filter(item => item.STRANAJMENO === nameOfGroup && !item.WIN && item.SECOND === 1)
        }
      },
      groupOf: function (name) {
        var party = this.listOfMajorParties.find(item => item.name === name) || {name: name, short: "ZZZ"};

        return party;
      },
      ch: function (result) {
      	return result.charAt(0) === "C" && result.charAt(1) === "h";
      },
      sortByChange: function (newBy) {
        this.sortBy = newBy;
      },
      ga: function (path, title) {
        this.$store.dispatch("ga", {path: path, title: title});
      },
      selectView: function () {
        var majorParty = this.listOfMajorParties.find(item => item.by === this.by);
        var title = "Seznam kandidatů";
        var path = "kandidati";

        if (majorParty) {
            this.filterBy = majorParty.short;
            title = title + " " + majorParty.short;
            path = path + "/" + this.by;

            this.ga(path, title);
            
            return;
        } 

        if (this.by === "ostatni") {
            this.filterBy = "others";

            title = "Seznam nezávislých kandidatů a kandidatů koalic";
            path = path + "/" + this.by;

            this.ga(path, title);
            return;
        } 

        this.filterBy = "all";
        this.ga(path, title);

      }
    },
    mounted: function () {
      window.scrollTo(0, 0);
      this.selectView();
    },
    watch: {
      by: function () {
        this.selectView();
      }
    }
};

