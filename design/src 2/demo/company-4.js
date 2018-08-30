/* eslint-disable */

const DEMO_COMPANY_RESPONSE = {
  data: {
  	id: 3,
  	name: "U ševce Matěje",
  	content: {
  		en: "This is a <b>company</b>",
  		cs: "Tohle je <b>firma</b>"
  	},
    meta: {
      type: 'company',
      category: [
        2
      ],
      tags: [
        0
      ],
      block: 0,
      house: 1,
      priority: 2
    },
  	images: {
  	},
    opened: {
      regular: [
        [[9, 18]],
        [[9, 18]],
        [[9, 18]],
        [[9, 18]],
        [[9, 16]],
        [],
        []
      ]
    },
    contact: {
      address: "nám. Jiřího z Poděbrad 1382/2, Praha 2",
      mobile: "605529784",
      web: "http://opravaobuvivyrobaklicu.webmium.com/"
    },
    social: {
      facebook: "https://www.facebook.com/usevcemateje/"
    },
    links: [
      {
        name: {
          en: "Open gallery",
          cs: "Zobrazit galerii"
        },
        src: "https://www.facebook.com/pg/usevcemateje/photos/?ref=page_internal"
      }
    ],
    events: []
  }
};

export default JSON.stringify(DEMO_COMPANY_RESPONSE);

/* eslint-enable */
