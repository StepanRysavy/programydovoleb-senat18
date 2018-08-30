import B from "@/language/babylon";

export default {
  name: 'perks',
  props: ['data'],
  components: {},
  computed: {
  	cheques: function () {
  		var list = [];

  		if (this.data.cheques.sodexo) list.push("Sodexo");
  		if (this.data.cheques.ticket) list.push("Ticket Restaurant");
  		if (this.data.cheques.cadhoc) list.push("Cadhoc");
  		if (this.data.cheques.sekservis) list.push("Šek Servis");
      if (this.data.cheques.unisek) list.push("Unišek");
      if (this.data.cheques.checques) list.push("Chèque Déjeuner");
      if (this.data.cheques.cafeteria) list.push("Cafeteria");
      if (this.data.cheques.edenred) list.push("Edenred benefity");
      if (this.data.cheques.flexi) list.push("Flexi");

  		return list.join(", ");
  	}
  },
  methods: {
  	B: B,
  	some: function (obj) {

  		var test = false;

  		Object.keys(obj).forEach((key) => {
  			if (obj[key] === true) test = true;
  		});

  		return test;
  	}
  }
};

