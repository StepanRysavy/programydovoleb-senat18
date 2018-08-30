import B from "@/language/babylon";

export default {
  name: 'static',
  props: ['id'],
  components: {},
  data: function () {
    return {}
  },
  computed: {
    headline: function () {
      return B('static.' + this.id + 'Headline');
    },
    content: function () {
      return B('static.' + this.id)
    }
  },
  methods: {
    gtm: function () {
      this.$ua.trackView("Statická stránka: " + B('static.' + this.id + 'Headline'), this.$route.fullPath);
    },
    analytics: function () {
      document.title = this.headline + " - Náš Jiřák";
      this.$ua.trackView(this.$route.fullPath, true);
      this.$store.commit("lastTrackedPage", this.$route.fullPath);
    }
  },
  mounted: function () {
    this.analytics();
  },
  updated: function () {
    this.analytics();
  }
};

