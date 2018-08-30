/* eslint-disable */

const DEMO_COMPANY_RESPONSE = {
  data: {
  	id: 1,
  	name: "Kadeřnický salon A&A",
    meta: {
      type: 'company',
      category: [
        2
      ],
      tags: [],
      block: 0,
      house: 3,
      priority: 2
    },
    images: {},
    opened: {
      regular: [
        [[8, 20]],
        [[8, 20]],
        [[8, 20]],
        [[8, 20]],
        [[8, 19]],
        [],
        []
      ]
    },
    contact: {
      address: "Mánesova 94, Praha 2",
      phone: "222712583",
      mobile: "776596000",
      web: "https://www.aasalon.cz/"
    },
    links: [
      {
        name: {
          en: "Open gallery",
          cs: "Zobrazit galerii"
        },
        src: "https://www.aasalon.cz/fotogalerie/"
      }
    ],
    social: {
      facebook: "https://www.facebook.com/Kade%C5%99nick%C3%BD-salon-AA-145719488774663/?ref=ts"
    },
    events: []
  }
};

export default JSON.stringify(DEMO_COMPANY_RESPONSE);

/* eslint-enable */
