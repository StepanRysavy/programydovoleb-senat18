import {timeInfo, beautifyHours} from "@/store/helpers";
import B from "@/language/babylon";

var timer;

export default {
  name: 'opened-relative',
  props: ['data', 'noClose', 'version'],
  data: function () {
  	return {
      anyData: this.anyData_fetch()
    }
  },
  computed: {
    hideClose: function () {
      return this.noClose || false
    },
  	now: function () {
  		return this.$store.state.current
  	},
  	message: function () {
  		return this.generateMessage(this.status, this.nextOpen, this.nextClose);
  	},
  	today: function () {
  		return this.checkDay(this.now);
  	},
  	status: function () {
  		var o = {
  			opened: false,
  			span: null
  		};

  		if (this.now) {
	  		var time = this.now.time.h + (this.now.time.m / 60);

	  		this.today.times.forEach(item => {

	  			if (item[0] <= time && item[1] > time) {
	  				o.opened = true;
	  				o.span = item;
	  			}

	  		});
  		}

  		return o;
  	},
  	nextClose: function () {

  		if (this.status.opened === true) {

  			var closing = {
  				full: this.status.span[1] - (this.now.time.h + (this.now.time.m / 60))
  			}

  			closing.h = Math.floor(closing.full);
			closing.m = Math.round((closing.full - closing.h) * 60);

			if (closing.h < 1) {

          var next = this.nextOpen;

          if (next != null) {
            if (next.span) if (next.span[0] === 0) return null; 
          }

          if (closing.m < 10) return {
            message: B('days.closes') + ' ' + B('days.closesShortly')
          };

	  			return {
	  				message: B('days.closes') + ' ' + closing.m + ' ' + B('days.closesMinutes')
	  			}

			}

  		}

  		return null;
  	},
  	nextOpen: function () {

  		var nextOpeningSpan = [];
  		var nextOpeningDay = null;
  		var nextOpeningMessage = null;

  		if (this.nextFewDays[0].times.length > 0) {
  			
  			var time = this.now.time.h + (this.now.time.m / 60);

	  		this.nextFewDays[0].times.forEach((item, index) => {
	  			if (time <= item[0] && nextOpeningSpan.length === 0) {
  					nextOpeningSpan = item;
  					nextOpeningDay = this.nextFewDays[0].info;
  					nextOpeningMessage = B('days.opens') + ' ' + beautifyHours(nextOpeningSpan[0]);
	  			}
	  		});
  		}

  		if (nextOpeningSpan.length === 0 && this.nextFewDays[1].times.length > 0) {
  			nextOpeningSpan = this.nextFewDays[1].times[0];
  			nextOpeningDay = this.nextFewDays[1].info;
  			nextOpeningMessage = B('days.opensTomorrow') + ' ' + beautifyHours(nextOpeningSpan[0]);
  		}

  		if (nextOpeningSpan.length === 0 && this.nextFewDays[2].times.length > 0) {
  			nextOpeningSpan = this.nextFewDays[2].times[0];
  			nextOpeningDay = this.nextFewDays[2].info;
  			nextOpeningMessage = B('days.opensDayBefore') + ' ' + B('days.' + nextOpeningDay.day.dayOfWeek) + ' ' + B('days.opensDayAfter') + ' ' + beautifyHours(nextOpeningSpan[0]);
  		}

  		if (nextOpeningDay) {
	  		return {
	  			info: nextOpeningDay,
	  			span: nextOpeningSpan,
	  			message: nextOpeningMessage
	  		};
  		} else {
  			return null;
  		}
  	},
  	nextFewDays: function () {
  		return [
			this.checkDay (this.day(0)),
			this.checkDay (this.day(1)),
			this.checkDay (this.day(2))
  		]
  	}
  },
  methods: {
    anyData_fetch: function () {

      if (this.data.regular) {
        for (var i = 0, day; i < 7; i++) {
          day = this.data.regular[i];

          if (day.length > 0) return true;
        }
      }

      if (this.data.special.length > 0) return true;

      return false;
    },
    B: B,
  	generateMessage (status, nextOpen, nextClose) {
  		return {
  			main: status.opened === true ? B('days.open') : B('days.closed'),
  			extra: status.opened === true ? (nextClose ? nextClose.message : null) : (nextOpen ? nextOpen.message : null)
  		};
  	},
  	checkDay (dateInfo) {
  		var times = [];
  		var test = {};

  		if (this.data.regular) {
  			if (this.data.regular[dateInfo.day.dayOfWeek]) {
  				times = this.data.regular[dateInfo.day.dayOfWeek];
  			}
  		}

  		if (this.data.special) {
  			this.data.special.forEach(item => {
  				test = timeInfo(item.date);

  				if (test.day.year === dateInfo.day.year &&
  					test.day.month === dateInfo.day.month &&
  					test.day.date === dateInfo.day.date) {

  					times = item.times;
  				}
  				
  			});
  		}

  		return {
  			info: dateInfo,
  			times: times
  		};
  	},
  	day (offset) {
  		return timeInfo(this.now.date.getTime() + (24 * 60 * 60 * 1000 * offset))
  	}
  },
  updated: function () {
    this.data.status = this.status.opened;
    this.anyData = this.anyData_fetch();
  },
  watch: {
    version: function () {
      this.anyData = this.anyData_fetch();
    }
  },
};

