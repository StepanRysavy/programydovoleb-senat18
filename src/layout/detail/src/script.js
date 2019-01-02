import Vote from "@/components/vote/do";
import Audio from "@/components/audio-modal/do";

export default {
	name: 'layout-detail',
	props: ['hash'],
	data: function () {
		return {
			details: false,
			selectedProgram: null,
			showResults: false,
			showAfter: 0
		}
	},
	computed: {
		link: function () {
			return "https://senat18.programydovoleb.cz/obvod/" + this.region.HASH;
		},
		name: function () {
			return this.region.OBVOD_NAZEV
		},
		region: function () {
			return this.$store.state.enum.find(item => item.HASH === this.hash)
		},
		votedInRegion: function () {

			if (this.$store.state.votes.data.length === 0) return false;

			if (this.$store.state.votes.data.find(item => item.OBVOD === this.region.OBVOD && item.TYP === 0)) return true;

			return false;
		},
		programs: function () {
			return this.$store.state.programs;
		},
		highlighted: function () {

			console.log (this.region.counted1, this.showAfter);

			if (!this.region.counted1) return [];

			var sortedByVotes = this.sort(this.programs); // this.programs.sort((a, b) => a.ZISK1_PCT < b.ZISK1_PCT);

			var list = [];

			list.push(sortedByVotes[0]);

			if (sortedByVotes[0].ZISK1_PCT < 50) {
				list.push(sortedByVotes[1])
			}

			return list;

		},
		highlighted2: function () {

			console.log (this.region.counted2, this.showAfter);

			if (!this.region.counted2) return this.highlighted;

			// var sortedByVotes = this.sort2(this.programs); // this.programs.sort((a, b) => a.ZISK1_PCT < b.ZISK1_PCT);

			var list = this.programs.filter(item => item.ZISK2 > 0);

			list = this.sort2(list);

			return list;

		}

	},
	components: {
		'vote-icon': Vote,
		'audio-modal': Audio
	},
	methods: {
		sort: function (list) {
			return list.sort((a, b) => b.ZISK1_PCT - a.ZISK1_PCT);
		},
		sort2: function (list) {
			return list.sort((a, b) => (b.ZISK2_PCT || 0) - (a.ZISK2_PCT || 0));
		},
		click_showResults: function () {
			this.showResults = !this.showResults;
		},
		audio: function (program) {
			return "https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky?" + this.region.OBVOD + "_" + program.CISLO;
		},
		votes: function (program) {
			if (this.$store.state.selectedRegion.votes) {
				var vote = this.$store.state.selectedRegion.votes.find(item => item.KANDIDAT === program.ID);

				if (vote) {
					return {
						count: vote.COUNT,
						percentage: Math.round(vote.COUNT / this.$store.state.selectedRegion.countVotes * 1000) / 10
					}
				} else {
					return {
						count: 0,
						percentage: 0
					};
				}
			} else {
				return {
					count: -1,
					percentage: 0
				};
			}
		},
		tips: function (program) {
			if (this.$store.state.selectedRegion.tips) {
				var vote = this.$store.state.selectedRegion.tips.find(item => item.KANDIDAT === program.ID);

				if (vote) {
					return {
						count: vote.COUNT,
						percentage: Math.round(vote.COUNT / this.$store.state.selectedRegion.countTips * 1000) / 10
					}
				} else {
					return {
						count: 0,
						percentage: 0
					};
				}
			} else {
				return {
					count: -1,
					percentage: 0
				};
			}
		},
		moveToNextCandidate: function () {

		},
		changeAudioModalTo: function (program) {
			this.selectedProgram = program;

			if (program === null) this.ga();
		},
		outbound: function (type, program) {
			this.ga("kandidat/" + program.ID + "/link/" + type, program.CELEJMENO + " - " + type);
		},
		sharebound: function () {
			this.ga("obvod/" + this.hash + "/share/fb", this.region.OBVOD_NAZEV + " sdílen na FB");
		},
		ga: function (add_path, add_title) {
	
			var path = "obvod/" + this.hash;
			var title = this.name;

			if (add_path) path = add_path;
			if (add_title) title = add_title;
			
    		this.$store.dispatch("ga", {path: path, title: title});

    		this.showAfter += 1;
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

