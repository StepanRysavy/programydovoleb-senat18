import Image from "@/components/image/do";
import Gallery from "@/components/gallery/do";
import Links from "@/components/links/do";
import Opened from "@/components/opened/do";
import OpenedRelative from "@/components/opened-relative/do";
import Social from "@/components/social/do";
import Meta from "@/components/meta/do";
import Contacts from "@/components/contacts/do";
import ContactsCustom from "@/components/contacts-custom/do";
import Updates from "@/components/updates/do";
import Perks from "@/components/perks/do";
import EventList from "@/components/event-list/do";
import Feedback from "@/components/feedback/do";

import {beautifyHTML} from "@/store/helpers";

export default {
  name: 'company',
  props: ['data', 'level'],
  components: {
    'show-picture': Image,
    'show-gallery': Gallery,
    'show-links': Links,
    'show-opened': Opened,
    'show-opened-relative': OpenedRelative,
    'show-social': Social,
    'show-meta': Meta,
    'show-contact': Contacts,
    'show-contact-custom': ContactsCustom,
    'show-updates': Updates,
    'show-event-list': EventList,
    'show-perks': Perks,
    'show-feedback': Feedback
  },
  data: function () {
    return {}
  },
  computed: {
    link: function () {
      if (!this.data.hash) return this.data.id;
      if (this.data.hash.length === 0) return this.data.id;
      return this.data.hash;
    }
  },
  methods: {
    getEvent: function (id) {
      return this.$store.getters.getEventByID(id);
    },
    beautifyHTML: beautifyHTML,
    unescape: unescape
  },
  mounted: function () {}
};

