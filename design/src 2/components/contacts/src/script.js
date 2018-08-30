import B from "@/language/babylon";
import {beautifyPhone} from "@/store/helpers";

export default {
  name: 'contact',
  props: ['data', 'level', 'house'],
  computed: {
  },
  methods: {
	B: B,
	phone: beautifyPhone
  }
};

