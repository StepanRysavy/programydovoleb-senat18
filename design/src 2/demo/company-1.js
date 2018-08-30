/* eslint-disable */

const DEMO_COMPANY_RESPONSE = {
  data: {
  	id: 0,
  	name: "Jiřák z Třetího patra",
  	content: {
  		en: "Us",
  		cs: "My"
  	},
    meta: {
      type: 'company',
      category: [
        0
      ],
      tags: [
      ],
      block: 0,
      house: 1,
      priority: 5
    },
  	images: {
  		logo: [
  			{
          src: "static/SVG/logo-nasjirak.svg",
          width: 120,
          height: 80
  			}
  		],
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
    contact: {
      email: "nasjirak@gmail.com"
    },
    social: {
      facebook: "https://www.facebook.com/nasjirak"
    },
    events: [
      {
        id: 0,
        priority: 1
      },
      {
        id: 1,
        priority: 2
      },
      {
        id: 2,
        priority: 3
      },
      {
        id: 3,
        priority: 4
      },
      {
        id: 4,
        priority: 5
      }
    ]
  }
};

export default JSON.stringify(DEMO_COMPANY_RESPONSE);

/* eslint-enable */
