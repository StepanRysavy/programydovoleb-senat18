export default {
  name: 'cover',
  props: ['path'],
  data: function () {
  	return {
  		list: [],
  		current: null,
  		exists: false
  	}
  },
  computed: {
  	coverStyle: function () {
  		return this.current ? "background-image: url(" + this.current + ")" : "";
  	}
  },
  mounted: function () {

  },
  methods: {
  	changeCover: function (path) {
  		var exists = this.list.find(item => item.path === path);

  		if (exists) {
  			if (exists.loaded === true) {
  				this.current = path;
  				this.showCover();
  			} 
  		} else {

			var img = {
				loader: new Image(),
				loaded: false,
				path: path
			};
			
			img.loader.addEventListener("load", (ev) => {
				img.loaded = true;

				this.changeCover(path);
			});

			img.loader.src = path;

			this.list.push(img);
  		}
  	},
  	hideCover: function () {
  		this.exists = false;
  	},
  	showCover: function () {
  		this.exists = true;
  	}
  },
  watch: {
  	path: function () {
  		if (this.path === null) {
  			this.hideCover();
  		} else {
  			if (window.innerWidth > 550) this.changeCover (this.path);
  		}
  	}
  }
};

