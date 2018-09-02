export default {
	name: 'layout-candidate',
	props: ['hash'],
	data: function () {
		return {}
	},
	computed: {
		program: function () {
			return this.$store.state.programs.find(item => item.HASH === this.hash)
		},
		region: function () {
			return this.$store.state.enum.find(item => item.OBVOD === this.program.OBVOD)
		},
		id: function () {
			return this.$store.state.listOfCandidates.find(item => item.HASH === this.hash).ID;
		}
	},
	components: {
	},
	methods: {
		outbound: function (type, program) {
			this.ga("link/" + type, type);
		},
		ga: function (add_path, add_title) {
	
			var path = "kandidat/" + this.program.ID;
			var title = this.program.CELEJMENO;

			if (add_path) path = path + "/" + add_path;
			if (add_title) title = title + " - " + add_title;
			
    		this.$store.dispatch("ga", {path: path, title: title});
		},
		reloadMeta: function () {

			var self = this;

			if (this.form === true) this.closeForm();

			this.$store.dispatch("fetchDetailPriority", {
				id: Number(this.id),
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
		hash: function () {
			this.reloadMeta();
		}
	}
};

