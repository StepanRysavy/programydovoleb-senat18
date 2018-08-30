import Company from "@/components/company/do";
import Event from "@/components/event/do";
import B from "@/language/babylon";

export default {
  name: 'home',
  props: ['id'],
  components: {
    'show-company': Company,
    'show-event': Event
  },
  data: function () {
    return {}
  },
  computed: {
    events: function () {
      return this.$store.state.structure.events
    },
    companies: function () {
      return this.$store.state.structure.companies
    },
    joinedResults: function () {
      return this.events.concat(this.companies)
    },
    openedVenues: function () {
      return this.joinedResults.filter(item => item.opened.status === true);
    },
    openedVenuesByPriority: function () {
      return this.sortByPriority(this.openedVenues); // .sort((a, b) => Number(a.meta.priority) < Number(b.meta.priority))
    },
    limitedOpenedVenues: function () {

      var list = this.$store.state.structure.companies.filter(item => item.opened.status === true);

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
    categories_list: function () {
      var list = [], root = this;

      this.$store.state.meta.category.forEach(function (category, index) {
        list.push({
          meta: category,
          list: root.$store.getters.getCompaniesByKey('category', category.id)
        });
      });

      return list;
    }
  },
  methods: {
    B: B,
    items_list: function (list) {
      return list;
    },
    sort: function (list) {
      return list.sort((a, b) => a.name > b.name);
    },
    toggleCategory: function (index) {
      this.$refs['categoryList'][index].classList.toggle("open");
    },
    analytics: function () {
      document.title = "Náš Jiřák";
      this.$ua.trackView(this.$route.fullPath, true);
      this.$store.commit("lastTrackedPage", this.$route.fullPath);
    }
  },
  mounted: function () {
    this.$store.commit("cover", "https://upload.nasjirak.cz/nasjirak-4.jpg");
    this.analytics();
  },
  beforeDestroy: function () {
    this.$store.commit("cover", null);
  }
};

