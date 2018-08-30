import {beautifyDate} from "@/store/helpers";
import B from "@/language/babylon";

export default {
  name: 'update',
  props: ['data'],
  methods: {
  	date: beautifyDate,
  	B: B
  }
};

