import axios from "axios";
import Feedback from "@/components/feedback/do";
import Cover from "@/components/cover/do";
import B from "@/language/babylon";

axios.defaults.baseURL = 'https://api.nasjirak.cz/v.1.2/api.php';
axios.interceptors.request.use(function (config) {

  if (config.url.indexOf("login.php") > -1) return config;

  var link = config.url.split(axios.defaults.baseURL);

  if (!config.params) config.params = {};

  var action = link[1].split("/");

  config.params.action = action[action.length - 1] || "";
  config.params.noCache = new Date().getTime();
  config.url = axios.defaults.baseURL;

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default {
  name: 'app',
  components: {
    'show-feedback': Feedback,
    'show-cover': Cover
  },
  computed: {
  },
  methods: {
    handleClickLangEnglish: function () {
      this.$store.commit('lang', 'en');
    },
    handleClickLangCzech: function () {
      this.$store.commit('lang', 'cs');
    },
    handleClickLogo: function () {
      this.$router.push('/');
    },
    B: B
  },
  created: function () {
    this.$store.dispatch('start', {});
  }
};

