import Image from "@/components/image/do";

export default {
  name: 'gallery',
  props: ['data', 'level'],
  data: function () {
  	return {
  		showThumbs: true
  	}
  },
  components: {
    'gallery-image': Image
  },
  methods: {
  	handleClick: function () {
  		this.showThumbs = !this.showThumbs;
  	}
  }
};

