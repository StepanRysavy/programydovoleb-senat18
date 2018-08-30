import {beautifyPhone} from "@/store/helpers";

export default {
  name: 'contactCustom',
  props: ['data', 'level'],
  computed: {
  },
  methods: {

  	formatByType: function (value, type) {

  		// TODO

      if (type === "phone") return '<a href="tel:+420' + value + '">' + beautifyPhone(value) + "</a>";
  		if (type === "url") return '<a href="' + value + '" target="_blank">' + value + "</a>";
  		if (type === "email") return '<a href="mailto:' + value + '" target="_blank">' + value + "</a>";

  		return value;
  	}
  }
};

