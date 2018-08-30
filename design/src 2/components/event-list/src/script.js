import Event from "@/components/event/do";

export default {
  name: 'event-list',
  props: ['data', 'level'],
  components: {
  	'show-event': Event
  },
  computed: {
    eventsHighPriority: function () {
      return this.data.filter(item => [5, 4].indexOf(item.priority) > -1)
    },
    eventsLowPriority: function () {
      return this.data.filter(item => [3, 2, 1].indexOf(item.priority) > -1)
    },
    eventsToDisplay: function () {

      var count = 0;

      if (this.level - 0 > 0) count += this.eventsHighPriority.length;
      if (this.level - 2 > 0) count += this.eventsLowPriority.length;

      return count;
    }
  },
  methods: {
	getEvent: function (id) {
      return this.$store.getters.getEventByID(id);
    }
  }
};

