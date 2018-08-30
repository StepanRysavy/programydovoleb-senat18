import B from "@/language/babylon";

export default {
  name: 'meta',
  props: ['data', 'level', 'hash'],
  methods: {
	B: B,
	dataCategory: function (id) {return this.$store.state.meta.category.find(item => item.id === id)},
	dataTags: function (id) {return this.$store.state.meta.tags.find(item => item.id === id)},
	dataBlock: function (id) {return this.$store.state.meta.block.find(item => item.id === id)},
	dataHouse: function (id) {return this.$store.state.meta.house.find(item => item.id === id)},
  }
};

