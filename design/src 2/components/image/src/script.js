var newIndex = 0;

export default {
  name: 'image',
  props: ['data', 'level', 'background'],
  data: function () {
    return {
      selectedIndex: 0,
      containerWidth: 0
    }
  },
  computed: {
  	src: function () {
  		return this.data[this.selectedIndex].src;
  	},
  	width: function () {
  		return this.data[this.selectedIndex].width
  	},
  	height: function () {
  		return this.data[this.selectedIndex].height
  	},
  },
  methods: {
    getContainerWidth: function () {
      this.containerWidth = this.$el.offsetWidth;
    },
    selectIndex: function () {

      newIndex = 0;

      if (this.data.length > 1) {

        for (var i = 0, size; i < this.data.length; i++) {
          size = this.data[i];

          if (size.min) {
            if (size.min < this.containerWidth) newIndex = i;
          }

        }

      }

      this.selectedIndex = newIndex;

    },
    handleResize: function () {
      this.getContainerWidth();
      this.selectIndex();
    }
  },
  mounted: function () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  updated: function () {
    this.handleResize ();
  },
  watch: {
    data: function () {
      this.handleResize();   
    }
  }
};

