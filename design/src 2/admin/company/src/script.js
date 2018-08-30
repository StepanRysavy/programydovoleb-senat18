import Company from "@/components/company/do";
import B from "@/language/babylon";
import UploadDropzone from "@/components/upload-dropzone/do";
import {beautifyDate, beautifyHours, beautifyHTML, uglifyHTML, compareByKey} from "@/store/helpers";

function compare(a, b) {
  return a.cs.localeCompare(b.cs, 'cs');
}

function compareAddress(a, b) {
  return a.address.localeCompare(b.address, 'cs');
}

export default {
  name: 'admin-company',
  props: ['data'],
  components: {
    'show-company': Company,
    'upload-dropzone': UploadDropzone,
  },
  data: function () {
    return {
      full: null,
      level: 5
    }
  },
  computed: {
    sortedCategory: function () {
      return this.$store.state.meta.category.sort(compare);
    },
    sortedTags: function () {
      return this.$store.state.meta.tags.sort(compare);
    },
    sortedBlock: function () {
      return this.$store.state.meta.block.sort(compare);
    },
    sortedHouse: function () {
      return this.$store.state.meta.house.sort(compareAddress);
    }
  },
  methods: {
    date: beautifyDate,
    beautifyHours: beautifyHours,
    beautifyHTML: beautifyHTML,
    compareByKey: compareByKey,
    B: B,
    combine: function () {
      this.full = Object.assign({}, defaultFull);

      if (this.data) {
        this.full.version = this.data.version || 0;
        this.full.id = this.data.id;
        this.full.hash = this.data.hash || "";
        this.full.name = this.data.name || "";

        if (this.data.content) this.full.content = this.data.content || {cs: "", en: ""};
        if (this.data.meta) this.full.meta = this.data.meta || {type: 'company', category: [], tags: [], block: 1, house: 1, priority: 3};
       
        if (this.data.opened) {
          this.full.opened.regular = this.data.opened.regular || [[], [], [], [], [], [], []];
          this.full.opened.special = this.data.opened.special || [];
          this.full.opened.note = this.data.opened.note || {en: "", cs: ""};
        } else {
          this.full.opened = {regular: [[], [], [], [], [], [], []], special: [], note: {en: "", cs: ""}};
        }

        this.full.images.visual = this.data.images.visual || [];

        this.full.contact.address = this.data.contact.address || "";
        this.full.contact.mobile = this.data.contact.mobile || "";
        this.full.contact.phone = this.data.contact.phone || "";
        this.full.contact.email = this.data.contact.email || "";
        this.full.contact.web = this.data.contact.web || "";

        this.full.social.instagram = this.data.social.instagram || "";
        this.full.social.facebook = this.data.social.facebook || "";
        this.full.social.twitter = this.data.social.twitter || "";
        this.full.social.youtube = this.data.social.youtube || "";

        if (this.data.links) this.full.links = this.data.links || [];
        if (this.data.events) this.full.events = this.data.events || [];

        this.full.content.cs = this.full.content.cs;
        this.full.content.en = this.full.content.en;

        if (this.data.comment) {
          this.full.comment.nasjirak = this.data.comment.nasjirak || {cs: "", en: ""}
          this.full.comment.others = this.data.comment.others || [];
        } else {
          this.full.comment = {nasjirak: {cs: "", en: ""}, others: []};
        }

        this.full.contactsCustom = this.data.contactsCustom || [];

        if (this.data.perks) {
          this.full.perks.wifi = this.data.perks.wifi || false;
          this.full.perks.garden = this.data.perks.garden || false;
          this.full.perks.pets = this.data.perks.pets || false;
          this.full.perks.accessible = this.data.perks.accessible || false;
          this.full.perks.cards = this.data.perks.cards || {};
          this.full.perks.cards.mastercard = this.data.perks.cards.mastercard || false;
          this.full.perks.cards.visa = this.data.perks.cards.visa || false;
          this.full.perks.cards.americanexpress = this.data.perks.cards.americanexpress || false;
          this.full.perks.cards.dinersclub = this.data.perks.cards.dinersclub || false;
          this.full.perks.cards.jcb = this.data.perks.cards.jcb || false;
          this.full.perks.cards.discover = this.data.perks.cards.discover || false;
          this.full.perks.cheques = this.data.perks.cheques || {};
          this.full.perks.cheques.sodexo = this.data.perks.cheques.sodexo || false;
          this.full.perks.cheques.cadhoc = this.data.perks.cheques.cadhoc || false;
          this.full.perks.cheques.sekservis = this.data.perks.cheques.sekservis || false;
          this.full.perks.cheques.ticket = this.data.perks.cheques.ticket || false;
          this.full.perks.cheques.unisek = this.data.perks.cheques.unisek || false;
          this.full.perks.cheques.checques = this.data.perks.cheques.checques || false;
          this.full.perks.cheques.cafeteria = this.data.perks.cheques.cafeteria || false;
          this.full.perks.cheques.edenred = this.data.perks.cheques.edenred || false;
          this.full.perks.cheques.flexi = this.data.perks.cheques.flexi || false;
          this.full.perks.crypto = this.data.perks.crypto || {bitcoin: false};

          if (this.data.perks.crypto) {
            this.full.perks.crypto.bitcoin = this.data.perks.crypto.bitcoin || false;
          }
          
        } else {
          this.full.perks = { accessible: false, wifi: false, garden: false, pets: false, crypto: {bitcoin: false}, cards: {mastercard: false, visa: false, americanexpress: false, dinersclub: false, jcb: false, discover: false}, cheques: {sodexo: false, cadhoc: false, sekservis: false, ticket: false, flexi: false, edenred: false, cafeterie: false, checques: false, unisek: false}};
        }

      } else {
        this.full.version = 0;
        this.full.id = 999999;
        this.full.hash = "";
        this.full.name = "";
        this.full.content = {cs: "", en: ""};
        this.full.meta = {type: 'company', category: [], tags: [], block: 1, house: 1, priority: 3};
        this.full.opened = {regular: [[], [], [], [], [], [], []], special: [], note: {cs: "", en: ""}};
        this.full.contact = {email: "", phone: "", mobile: "", web: "", address: ""};
        this.full.contactsCustom = [];
        this.full.social = {facebook: "", instagram: "", youtube: "", twitter: ""};
        this.full.links = [];
        this.full.events = [];
        this.full.images.visual = [];
        this.full.comment = {nasjirak: {cs: "", en: ""}, others: []};
        this.full.perks = { accessible: false, wifi: false, garden: false, pets: false, crypto: {bitcoin: false}, cards: {mastercard: false, visa: false, americanexpress: false, dinersclub: false, jcb: false, discover: false}, cheques: {mastercard: false, visa: false, americanexpress: false, dinersclub: false, jcb: false, discover: false}, cheques: {sodexo: false, cadhoc: false, sekservis: false, ticket: false, flexi: false, edenred: false, cafeterie: false, checques: false, unisek: false}};
      }
    },
    stringifyTime: function (arr) {
      var str = [];

      arr.forEach((time) => {
        str.push(time.join("-"));
      });

      return str.join(",");
    },
    handleClickLangEnglish: function () {
      this.$store.commit('lang', 'en');
    },
    handleClickLangCzech: function () {
      this.$store.commit('lang', 'cs');
    },
    handleClick_CategoryRemove: function (index) {
      this.full.meta.category.splice(index, 1);
    },
    handleClick_CategoryAdd: function () {
      this.full.meta.category.push(Number(this.$refs.category.value));
    },
    handleClick_TagsRemove: function (index) {
      this.full.meta.tags.splice(index, 1);
    },
    handleClick_TagsAdd: function () {
      this.full.meta.tags.push(Number(this.$refs.tags.value));
    },
    handleClick_Opened: function () {

      this.$refs.opened.forEach((day, index) => {
        this.full.opened.regular[index] = this.timeSplits(day.value);
      });

      console.log (this.full.version)

      this.full.version = this.full.version + 1;
    },
    handleClick_SpecialAdd: function () {

      var obj = {
        date: new Date(this.$refs.special_date.value).getTime(),
        times: this.timeSplits(this.$refs.special_time.value),
        name: this.$refs.special_name.value
      }

      this.full.opened.special.push(obj);

    },
    handleClick_SpecialRemove: function (index) {
      this.full.opened.special.splice(index, 1);
    },
    handleClick_LinkRemove: function (index) {
      this.full.links.splice(index, 1);
    },
    handleClick_LinkAdd: function () {
      var obj = {
        src: this.$refs.link_src.value,
        name: {
          cs: this.$refs.link_cs.value,
          en: this.$refs.link_en.value
        }
      }

      this.full.links.push(obj);

      this.$refs.link_src.value = "";
      this.$refs.link_cs.value = "";
      this.$refs.link_en.value = "";
    },
    handleClick_ContactsCustomRemove: function (index) {
      this.full.contactsCustom.splice(index, 1);
    },
    handleClick_ContactsCustomAdd: function () {
      var obj = {
        content: this.$refs.contactsCustom_content.value,
        type: this.$refs.contactsCustom_type.value,
        label: {
          cs: this.$refs.contactsCustom_cs.value,
          en: this.$refs.contactsCustom_en.value
        }
      }

      this.full.contactsCustom.push(obj);

      this.$refs.contactsCustom_content.value = "";
      this.$refs.contactsCustom_type.value = "";
      this.$refs.contactsCustom_cs.value = "";
      this.$refs.contactsCustom_en.value = "";
    },
    handleClick_VisualRemove: function (index) {
      this.full.images.visual.splice(index, 1);
    },
    handleClick_VisualAdd: function () {
      var obj = {
        src: this.$refs.visual_src.value,
        width: Number(this.$refs.visual_width.value),
        height: Number(this.$refs.visual_height.value),
        min: Number(this.$refs.visual_min.value),
      }

      this.full.images.visual.push(obj);
    },
    dropzone_upload: function (data) {
      this.$refs.visual_src.value = data.src;
      this.$refs.visual_width.value = data.width;
      this.$refs.visual_height.value = data.height;
    },
    handleClick_EventRemove: function (index) {
      this.full.events.splice(index, 1);
    },
    handleClick_EventAdd: function () {

      var obj = {
        id: Number(this.$refs.event_id.value),
        priority: Number(this.$refs.event_priority.value)
      }

      this.full.events.push(obj);
    },
    timeSplits: function (value) {
        var spans = [];

        var splits = value.split(",");

        if (splits[0] != "") {

          splits.forEach(split => {

            var span = split.split("-");

            span.forEach((spanned, id) => {
              span[id] = Number(spanned);
            });

            spans.push(span);

          });
        }

        return spans;
    },
    handleClick_Save: function () {

      this.$store.dispatch('companySave', {
        data: escape(JSON.stringify({data: this.full}).replace("999999", "%%GENERATED%%")),
        id: this.full.id,
        added: new Date().getTime(),
        onComplete: (id) => {
          this.$emit('saved', {id: id})
        }
      });
    },
    handleClick_Deactivate: function () {
      this.$store.dispatch('companySave', {
        data: escape(JSON.stringify({data: this.full}).replace("999999", "%%GENERATED%%")),
        id: this.full.id,
        removed: 1,
        onComplete: (id) => {
          this.$emit('saved', {id: id})
        }
      });
    }
  },
  mounted: function () {
    this.combine();
  },
  watch: {
    data: function () {
      this.combine();
    }
  }
};

const defaultFull = {
  version: 0,
  id: 999999,
  hash: "",
  name: "",
  content: {
    en: "",
    cs: ""
  },
  meta: {
    type: 'company',
    category: [],
    tags: [],
    block: 1,
    house: 1,
    priority: 1
  },
  comment: {
    nasjirak: {
      en: "",
      cs: ""
    },
    others: []
  },
  perks: {
    wifi: false,
    garden: false,
    pets: false,
    accessible: false,
    cards: {
      mastercard: false,
      visa: false,
      americanexpress: false,
      dinersclub: false,
      jcb: false,
      discover: false,
      bitcoin: false
    },
    cheques: {
      sodexo: false,
      cadhoc: false,
      sekservis: false,
      ticket: false,
      flexi: false,
      edenred: false, 
      cafeterie: false, 
      checques: false, 
      unisek: false
    },
    crypto: {
      bitcoin: false
    }
  },
  images: {
    logo: [],
    visual: [],
  },
  contact: {
    email: "",
    phone: "",
    mobile: "",
    web: "",
    address: ""
  },
  contactsCustom: [],
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: ""
  },
  opened: {
    regular: [
      [], [], [], [], [], [], []
    ],
    special: [],
    note: {
      en: "",
      cs: ""
    }
  },
  links: [],
  events: []
}

