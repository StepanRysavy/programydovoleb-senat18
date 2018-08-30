import Company from "@/components/company/do";

export default {
  name: 'page-company',
  props: ['id'],
  components: {
    'show-company': Company
  },
  data: function () {
    return {}
  },
  computed: {
    data: function () {

      if (this.$store.getters.getCompanyByHash(this.id)) {
        return this.$store.getters.getCompanyByHash(this.id);
      } else {
        return this.$store.getters.getCompanyByID(this.id);
      }      
    }
  },
  methods: {
    analytics: function () {

      if (this.$store.state.lastTrackedPage === this.$route.fullPath) return;

      document.title = this.data.name + " - Náš Jiřák";
      this.$ua.trackView(this.$route.fullPath, true);
      this.$store.commit("lastTrackedPage", this.$route.fullPath);
    }
  },
  mounted: function () {
    this.analytics();
  },
  updated: function () {
    // this.analytics();
  }
};

