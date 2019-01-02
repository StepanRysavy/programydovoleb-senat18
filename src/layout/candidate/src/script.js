import Vote from "@/components/vote/do";

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
		},
		voted: function () {

			var tipped = this.$store.state.votes.data.find(item => item.TYP === 0 && item.KANDIDAT == this.program.ID && item.OBVOD == this.region.ID);
			var voted = this.$store.state.votes.data.find(item => item.TYP === 1 && item.KANDIDAT == this.program.ID && item.OBVOD == this.region.ID);

			var votedFor = this.$store.state.votes.data.find(item => item.TYP === 1);
			var tippedFor = this.$store.state.votes.data.find(item => item.TYP === 0 && item.OBVOD == this.region.ID);

			var copy = [];

			if (tipped) {
				copy.push("<p>Tipujete, že " + this.program.CELEJMENO + " se stane senátorem za obvod " + this.region.OBVOD_NAZEV + ".</p>");
			} else {
				if (tippedFor) copy.push("<p>Tipovali jste, že " + this.$store.state.listOfCandidates.find(item => item.ID === tippedFor.KANDIDAT).CELEJMENO + " se dostane do Senátu za obvod " + this.region.OBVOD_NAZEV + ".</p>")
			}
			copy.push("<p>V každém obvodu si můžete <b>tipnout</b>, kdo se dostane do Senátu.</p>");
			copy.push("<hr>");
			if (voted) {
				copy.push("<p>" + this.program.CELEJMENO + " získal <b>váš hlas</b> ve volbách nanečisto.</p>");
			} else {
				copy.push("<p>Můžete i <b>hlasovat</b> nanečisto. Hlas ale můžete dát jen jednomu kandidátovi.</p>")
				if (votedFor) copy.push("<p>" + this.$store.state.listOfCandidates.find(item => item.ID === votedFor.KANDIDAT).CELEJMENO + " má nyní váš hlas. Novým hlasováním původní hlas zrušíte.</p>")
			} 

			return copy.join("");
		}
	},
	components: {
		'vote-icon': Vote
	},
	methods: {
		audio: function (program) {
			return "https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky?" + this.region.OBVOD + "_" + program.CISLO;
		},
		audioFrame: function (program) {
			return "https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky/kandidat-na-senatora?" + this.region.OBVOD + "_" + program.CISLO;
		},
		outbound: function (type, program) {
			this.ga("link/" + type, type);
		},
		ga: function (add_path, add_title) {
	
			var path = "kandidat/" + this.program.HASH;
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
		},
		load: function () {
	        this.$store.commit("modal", {
	          show: true,
	          vote: false,
	          load: (hash) => {
	          	this.$store.dispatch("setHash", hash);
	          }
	        });
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

