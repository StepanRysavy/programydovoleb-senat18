import Company from '@/admin/company/do';
import Event from '@/admin/event/do';
import {compareByKey} from '@/store/helpers';

export default {
  name: 'admin',
  props: [],
  components: {
    'edit-company': Company,
    'edit-event': Event,
  },
  data: function () {
    return {
      type: 'company',
      id: null,
      tco: true,
      te: false,
      tc: false,
      tt: false,
      th: false,
      tb: false,
      block: false,
      result: null,
      companies: this.getCompanies(),
      events: this.getEvents(),
      tags: this.getTags(),
      categories: this.getCategories(),
      blocks: this.getBlocks(),
      houses: this.getHouses()
    }
  },
  computed: {
  },
  methods: {
    compareByKey: compareByKey,
    getCompanies: function () { return this.$store.state.structure.companies },
    getEvents: function () { return this.$store.state.structure.events },
    getTags: function () { return compareByKey(this.$store.state.meta.tags, 'cs') },
    getCategories: function () { return compareByKey(this.$store.state.meta.category, 'cs') },
    getBlocks: function () { return compareByKey(this.$store.state.meta.block, 'cs') },
    getHouses: function () { return this.$store.state.meta.house }, 
    show: function (type, id) {
      this.type = type;
      this.id = id;
    },
    ctco: function () {
      this.tco = !this.tco;
    },
    cte: function () {
      this.te = !this.te;
    },
    ctc: function () {
      this.tc = !this.tc;
    },
    ctt: function () {
      this.tt = !this.tt;
    },
    cth: function () {
      this.th = !this.th;
    },
    ctb: function () {
      this.tb = !this.tb;
    },
    message: function (s) {
      this.result = s;

      setTimeout(() => this.result = null, 3000);
    },
    handleClick_categoryAdd: function () {
      var obj = {
        id: '%%GENERATED%%',
        cs: this.$refs.category_cs.value,
        en: this.$refs.category_en.value
      }

      this.$store.dispatch('metaSave', {
        data: JSON.stringify(obj),
        type: 'category',
        onComplete: () => {
          this.$refs.category_cs.value = "";
          this.$refs.category_en.value = "";
          this.block = false;
          this.message("Kategorie uložena");
        }
      });

      this.block = true;
    },
    handleClick_tagsAdd: function () {
      var obj = {
        id: '%%GENERATED%%',
        cs: this.$refs.tags_cs.value,
        en: this.$refs.tags_en.value
      }

      this.$store.dispatch('metaSave', {
        data: JSON.stringify(obj),
        type: 'tags',
        onComplete: () => {
          this.$refs.tags_cs.value = "";
          this.$refs.tags_en.value = "";
          this.block = false;
          this.message("Tag uložen");
        }
      });

      this.block = true;
    },
    handleClick_blockAdd: function () {
      var obj = {
        id: '%%GENERATED%%',
        cs: this.$refs.block_cs.value,
        en: this.$refs.block_en.value
      }

      this.$store.dispatch('metaSave', {
        data: JSON.stringify(obj),
        type: 'block',
        onComplete: () => {
          this.$refs.block_cs.value = "";
          this.$refs.block_en.value = "";
          this.block = false;
          this.message("Blok uložen");
        }
      });

      this.block = true;
    },
    handleClick_houseAdd: function () {
      var obj = {
        id: '%%GENERATED%%',
        address: this.$refs.house.value
      }

      this.$store.dispatch('metaSave', {
        data: JSON.stringify(obj),
        type: 'house',
        onComplete: () => {
          this.$refs.house.value = "";
          this.block = false;
          this.message("Dům uložen");
        }
      });

      this.block = true;
    },
    savedCompany: function (payload) {
      this.show('company', payload.id);
      this.tco = true;
      this.message("Firma uložena");
    },
    savedEvent: function (payload) {
      this.show('event', payload.id);
      this.te = true;
      this.message("Článek uložen");
    },
    handleClick_generateSitemap: function () {
      var output = [];
      output.push('<?xml version="1.0" encoding="UTF-8"?>');
      output.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      output.push('<url>');
      output.push('<loc>https://www.nasjirak.cz/</loc>');
      output.push('<changefreq>weekly</changefreq>');
      output.push('</url>');

      this.$store.state.structure.companies.forEach((company, index) => {
        var data = [];
            data.push("<url>");
            data.push("<loc>https://www.nasjirak.cz/co/" + company.hash + "</loc>");
            data.push("<changefreq>weekly</changefreq>");
            data.push("</url>");

        if (company.meta.active === true) output.push(data.join(""));
      });

      output.push('</urlset>');

      console.log("sitemap.xml", [output.join("")]);
    }

  },
  mounted: function () {
    this.$store.state.admin = true;
  },
  beforeDestroy: function () {
    this.$store.state.admin = false;
  },
  created: function () {
    this.$store.dispatch('startAdmin', {});
  }
};

