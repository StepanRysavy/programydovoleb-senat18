var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var value; 

export default {
	name: 'layout-candidate',
	props: ['id'],
	data: function () {
		return {
			form: false,
			selected: null,
			selectedID: 0,
			www: '',
			fb: '',
			tw: '',
			heslo: '',
			sent: false
		}
	},
	computed: {
		program: function () {
			return this.$store.state.programs.find(item => item.ID === Number(this.id))
		},
		region: function () {
			return this.$store.state.enum.find(item => item.OBVOD === this.program.OBVOD)
		}
	},
	components: {
	},
	methods: {
		disabled: function (content) {
			return !content.match(regex);
		},
		openForm: function (program) {

			this.value = '';
			this.sent = false;
			this.selected = this.$store.state.programs.find(item => item.ID === program.ID).CELEJMENO;
			this.selectedID = program.ID;
			this.form = true;
			this.ga("form-open/", "formulář otevřen");

		},
		closeForm: function () {
			this.form = false;
			this.ga("form-close/", "formulář zavřen");
			this.ga();
		},
		sendForm: function (type) {
			this.$store.dispatch("suggest", {
				id: this.selectedID,
				value: this[type],
				type: type
			});

			this[type] = '';

			this.$el.querySelector('.add-link-' + type).classList.add('sent');

			this.ga("form-send/" + type, "formulář odeslán: " + type);
		},
		outbound: function (type, program) {
			this.ga("/link/" + type, type + ": " + program.CELEJMENO);
		},
		ga: function (add_path, add_title) {
	
			var path = "kandidat/" + this.program.ID;
			var title = this.program.CELEJMENO;

			if (add_path) path = path + "/" + add_path;
			if (add_title) title = title + " - " + add_title;

			if (window.gtag) {
				window.gtag("config","UA-4347750-18",{"page_path": path, "page_title": title});
			} else {
				console.log("GA:", path, title);
			}
		},
		reloadMeta: function () {

			var self = this;

			if (this.form === true) this.closeForm();

			console.log(this.id);

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

