export default {
	name: 'layout-candidates',
	computed: {
		list: function () {
			return this.sort(this.$store.state.enum.filter(item => item.PORADI === this.$store.state.poradi));
		}
	},
    methods: {
      sort: function (list) {
        return list.sort((a,b) => a.OBVOD_NAZEV.localeCompare(b.OBVOD_NAZEV, 'cs', {sensitivity: 'base'}));
      },
      ch: function (result) {
      	return result.charAt(0) === "C" && result.charAt(1) === "h";
      }
    }
};

