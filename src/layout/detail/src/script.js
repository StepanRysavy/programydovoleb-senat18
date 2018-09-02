export default {
	name: 'layout-detail',
	props: ['hash'],
	data: function () {
		return {
			details: false
		}
	},
	computed: {
		name: function () {
			return this.region.OBVOD_NAZEV
		},
		region: function () {
			return this.$store.state.enum.find(item => item.HASH === this.hash)
		}
	},
	components: {
	},
	methods: {
		outbound: function (type, program) {
			this.ga("kandidat/" + program.ID + "/link/" + type, program.CELEJMENO + " - " + type);
		},
		ga: function (add_path, add_title) {
	
			var path = "obvod/" + this.hash;
			var title = this.name;

			if (add_path) path = add_path;
			if (add_title) title = add_title;
			
    		this.$store.dispatch("ga", {path: path, title: title});
		},
		reloadMeta: function () {

			var self = this;

			if (this.form === true) this.closeForm();

			this.$store.dispatch("fetchDetail", {
				id: Number(this.region.ID),
				onComplete: function () {

					if (self.$store.state.enum.length > 0) {
						self.ga();
					} else {
						setTimeout (function () {
							self.ga();
						}, 1000);
					}
				}
			});
			this.$store.commit("clearSearch");
		}
	},
	mounted: function () {
		this.reloadMeta();
		window.scrollTo(0, 0);
		
	},
	updated: function () {
		// this.$store.dispatch("fetchDetail", Number(this.id));
	},
	watch:  {
		id: function () {
			this.reloadMeta();
		}
	}
};

