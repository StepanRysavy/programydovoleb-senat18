import Event from "@/components/event/do";

export default {
  name: 'page-event',
  props: ['id'],
  components: {
    'show-event': Event
  },
  data: function () {
    return {}
  },
  computed: {
    data: function () {

      if (this.$store.getters.getEventByHash(this.id)) {
        return this.$store.getters.getEventByHash(this.id);
      } else {
        return this.$store.getters.getEventByID(this.id);
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

