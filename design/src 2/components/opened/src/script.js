import {beautifyDate, beautifyHours} from "@/store/helpers";
import B from "@/language/babylon";

export default {
  name: 'opened',
  props: ['data', 'level', 'version'],
  data: function () {
  	return {
  		"_": {
  			date: beautifyDate
  		},
      itt: 0,
      anyData: this.anyData_fetch()
  	}
  },
  methods: {
  	date: beautifyDate,
    beautifyHours: beautifyHours,
  	B: B,
    anyData_fetch: function () {

      if (this.data.regular) {
        for (var i = 0, day; i < 7; i++) {
          day = this.data.regular[i];

          if (day.length > 0) return true;
        }
      }

      if (this.data.special) {
        if (this.data.special.length > 0) return true;
      } 

      return false;
    }
  },
  computed: {
    special: function () {
      return this.data.special;
    },
    regular: function () {

      if (!this.data.regular) return;

      var x = this.version || 0;

      var refactored = [];

      var original = [];

      for (var i = 0, day; i < 7; i++) {

        var originalDay = [];

        day = this.data.regular[i];

        for (var j = 0, time; j < day.length; j++) {

          var originalTime = [];

          time = day[j];

          originalTime[0] = time[0];
          originalTime[1] = time[1];

          originalDay.push(originalTime);

        }

        original.push(originalDay);

      }

      for (var i = 0, today, yesterday; i < 7; i++) {
        today = original[i];
        yesterday = original[i - 1 < 0 ? 6 : i - 1]; 

        if (today.length > 0) {
          if (today[0][0] === 0) {
            // console.log(i, "starts at midnight");

            if (today[0][1] != 24) {
              // console.log(i, "is not nonstop");

              if (yesterday.length > 0) {
                // console.log(i, "yesterday is not closed");
                // console.log(yesterday[yesterday.length - 1]);

                if (yesterday[yesterday.length - 1][1] === 24) {
                  // console.log(i, "yesterday is until midnight");

                  yesterday[yesterday.length - 1][1] += today[0][1];
                  today.splice(0,1);
                }
              }
            }
          }
        }

        refactored.push(today);

      }

      return refactored;
    }
  },
  updated: function () {
    this.anyData = this.anyData_fetch();
  },
  watch: {
    version: function () {
      this.anyData = this.anyData_fetch();
    }
  },
  mounted: function () {
    this.anyData = this.anyData_fetch();
  }
};

