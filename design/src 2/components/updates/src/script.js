import Update from "@/components/update/do";

export default {
  name: 'updates',
  props: ['data'],
  components: {
    'show-update': Update
  }

};

