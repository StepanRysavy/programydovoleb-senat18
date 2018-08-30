/* eslint-disable */

const DEMO_EVENT_RESPONSE = {
  data: {
    id: 2,
    name: "Event 3",
    content: {
      en: "This is an <b>event</b>",
      cs: "Tohle je <b>udalost</b>"
    },
    meta: {
      type: 'event',
      category: [
        1
      ],
      tags: [
        0
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
      gallery: [
        {
          name: "Image",
          author: "JZ3P",
          copyright: "free",
          image: [
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
          ]
        }
      ]
    },
    opened: {
      special: [
        {
          date: 1526125156435,
          times: [[14, 22]]
        },
        {
          date: 1526226156435,
          times: [[8, 14]]
        }
      ]
    },
    contact: {
      address: "JZP",
      phone: "+420777123456",
      email: "my@company.com",
      web: "company.com"
    },
    social: {
      facebook: "company",
      instagram: "company",
      youtube: "company"
    },
    updates: [
      {
        date: 1526125156435,
        source: {
          src: "http://www.idnes.cz",
          type: "facebook"
        },
        name: {
          en: "Change of start time",
          cs: "Změna začátku"
        },
        content: {
          en: "It rains, so we gonna start at 8PM",
          cs: "Prší, začnem v osm"
        }
      }
    ]
  }
};

export default JSON.stringify(DEMO_EVENT_RESPONSE);

/* eslint-enable */
