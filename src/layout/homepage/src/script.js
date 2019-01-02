import Images from "@/components/images/do";

export default {
	name: 'layout-homepage',
  components: {
    'list-of-images': Images
  },
  data: function () {
    return {
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
      ]
    }
  },
	computed: {
    latestImages: function () {

      var list = this.$store.state.images.data.slice().reverse();

      return [list[0], list[1], list[2]];
    },
		list: function () {
			return this.sort(this.$store.state.enum.filter(item => item.PORADI === this.$store.state.poradi));
		}
	},
    methods: {
      region: function (obvod) {
        return this.$store.state.enum.find(item => item.OBVOD === obvod);
      },
      shorten: function (name) {
        var long = this.listOfMajorParties.find(item => item.name === name);

        if (long) return long.short;

        return name;
      },
      sort: function (list) {
        return list.sort((a,b) => a.OBVOD_NAZEV.localeCompare(b.OBVOD_NAZEV, 'cs', {sensitivity: 'base'}));
      },
      ch: function (result) {
      	return result.charAt(0) === "C" && result.charAt(1) === "h";
      }
    },
    mounted: function () {
      
      window.scrollTo(0, 0);
      
      var root = this;

      if (this.$store.state.images.loaded === false) {
        this.$store.dispatch("fetchImages", {
          onComplete: function () {
            root.$store.dispatch("ga", {path: "", title: "Senátní volby 2018"});
          }
        });
      } else {
        root.$store.dispatch("ga", {path: "", title: "Senátní volby 2018"});
      } 
    }
};

