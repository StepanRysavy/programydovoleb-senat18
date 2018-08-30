import Company from "@/components/company/do";
import Event from "@/components/event/do";
import B from "@/language/babylon";

function compare(a, b) {
  return a.cs.localeCompare(b.cs, 'cs');
}

export default {
  name: 'search',
  props: ['id', 'metaType'],
  components: {
    'show-company': Company,
    'show-event': Event
  },
  data: function () {
    return {}
  },
  computed: {
    headline: function () {

      if (this.metaType === 'house') return this.$store.state.meta[this.metaType].find(item => item.id === Number(this.id)).address;
      if (this.metaType === 'tags') return '#' + this.$store.state.meta[this.metaType].find(item => item.id === Number(this.id))[this.$store.state.language];
      
      return this.$store.state.meta[this.metaType].find(item => item.id === Number(this.id))[this.$store.state.language];
    },
    events: function () {
      return this.$store.getters.getEventsByKey(this.metaType, this.id)
    },
    companies: function () {
      return this.$store.getters.getCompaniesByKey(this.metaType, this.id)
    },
    joinedResults: function () {
      return this.events.concat(this.companies).sort((a, b) => a.meta.priority < b.meta.priority)
    },
    openedVenues: function () {
      return this.joinedResults.filter(item => item.opened.status === true).sort((a, b) => a.name > b.name);
    },
    limitedOpenedVenues: function () {

      var list = this.joinedResults.filter(item => item.opened.status === true);

      var missing = 3;

      var result = [];

      var search = list.filter(item => Number(item.meta.priority) === 5);

      search.forEach(item => {
        if (result.length < 3) result.push(item);
      });

      search = list.filter(item => Number(item.meta.priority) === 4);

      search.forEach(item => {
        if (result.length < 3) result.push(item);
      });

      search = list.filter(item => Number(item.meta.priority) === 3);

      search.forEach(item => {
        if (result.length < 3) result.push(item);
      });

      return this.sort(result);
    },
    others: function () {
      if (this.metaType === 'category') return this.$store.state.meta[this.metaType];
      if (this.metaType === 'tags') return this.$store.state.meta[this.metaType];

      return [];
    }
  },
  methods: {
    sort: function (list) {
      return list.sort((a, b) => a.name > b.name);
    },
    sortByPriority: function (list) {
      return list.sort((a, b) => a.name > b.name);
    },
    priority: function (amount) {
      return this.sort(this.joinedResults.filter(item => item.meta.priority === amount));
    },
    B: B,
    analytics: function () {
      document.title = this.headline + " (" + this.metaType + ") - Náš Jiřák";
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

