/* eslint-disable */

const DEMO_COMPANY_RESPONSE = {
  data: {
  	id: 2,
  	name: "Queen's Kebab",
    meta: {
      type: 'company',
      category: [
        1
      ],
      tags: [
      ],
      block: 0,
      house: 1,
      priority: 3
    },
  	images: {
  	},
    opened: {
      regular: [
        [[10, 22]],
        [[10, 22]],
        [[10, 22]],
        [[10, 22]],
        [[10, 22]],
        [[10, 22]],
        [[10, 22]]
      ]
    },
    contact: {
      address: "nám. Jiřího z Poděbrad 1382/2, Praha 2"
    },
    links: [
      {
        name: {
          en: "Open gallery",
          cs: "Zobrazit galerii"
        },
        src: "https://skrz.cz/firmy/queens-kebab"
      }
    ],
    social: {},
    events: []
  }
};

export default JSON.stringify(DEMO_COMPANY_RESPONSE);

/* eslint-enable */
