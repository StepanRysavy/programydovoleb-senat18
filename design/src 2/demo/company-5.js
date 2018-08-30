/* eslint-disable */

const DEMO_COMPANY_RESPONSE = {
  data: {
  	id: 4,
  	name: "Lékárna u Krále Jiřího",
  	content: {
  		en: "",
  		cs: "<p>Lékárna u Krále Jiřího poskytuje kvalitní lékárenskou péči a odborné poradenství s důrazem na individuální přístup ke každému pacientovi.</p><p>Nabízí široký sortiment v oblasti léčiv na předpis i volně prodejných, doplňků stravy a zdravotnických prostředků. Součástí nabídky je i pěstící a léčebná kosmetika prodejná v lékárnách, a to i v bio kvalitě.</p><p>Naším posláním je poskytnout každému pacientovi přípravky vhodné pro jeho léčbu a podporu léčby spolu s adekvátní odbornou radou.</p>"
  	},
    meta: {
      type: 'company',
      category: [
        2
      ],
      tags: [
      ],
      block: 0,
      house: 0,
      priority: 3
    },
  	images: {
      visual: [
        {
          src: "/static/visual-mini.jpg",
          width: 320,
          height: 320
        },
        {
          src: "/static/visual.jpg",
          width: 840,
          height: 440,
          min: 320
        }
      ],
    },
    opened: {
      regular: [
        [[8, 18.5]],
        [[8, 18.5]],
        [[8, 18.5]],
        [[8, 18.5]],
        [[8, 18.5]],
        [],
        []
      ]
    },
    contact: {
      address: "Vinohradská 1318/99, Praha 2",
      phone: "222725012",
      web: "http://www.lekarnaukralejiriho.cz/"
    },
    social: {
    },
    events: [
    ]
  }
};

export default JSON.stringify(DEMO_COMPANY_RESPONSE);

/* eslint-enable */
