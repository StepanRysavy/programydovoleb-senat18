import Form from '@/components/form/do';
import B from "@/language/babylon";
import {nonEmpty, email} from '@/components/form/validators/validators';
import ButtonConfirm from "@/components/buttons/button-confirm/do";

export default {
  name: 'feedback',
  props: ['data'],
  components: {
    'button-confirm': ButtonConfirm,
    'show-form': Form
  },
  data: function () {
  	return {
  		showForm: false
  	}
  },
  computed: {
    cancelButton: function () {
      return {
        type: 'confirm',
        label: B('feedback.close'),
        onClick: this.handleClick
      }
    },
    headline: function () {
      return B('feedback.headline') +  ' ' + this.data.name;
    },
    fields: function () {
      return Form.create({
        fields: [
          {
            name: 'message',
            label: B('feedback.messageLabel'),
            placeholder: B('feedback.messagePlaceholder'),
            required: true,
            type: 'textarea',
            validate: [nonEmpty],
            value: ''
          },
          {
            name: 'email',
            label: B('feedback.emailLabel'),
            placeholder: B('feedback.emailPlaceholder'),
            validate: [email],
            validateOnlyIfNotEmpty: true,
            value: ''

          },
          {
            name: 'name',
            type: 'hidden',
            value: this.data.name
          },
          {
            name: 'route',
            type: 'hidden',
            value: this.$route.fullPath
          }
        ],
        buttons: [
          {
            type: 'confirm',
            label: B('feedback.send'),
            onClick: this.handleFormSend
          }
        ]
      })
    }
  },
  methods: {
  	handleClick: function (ev) {
  		this.$store.state.showFeedback = !this.$store.state.showFeedback;
  	},
    handleFormSend: function () {

      var obj = Form.values(this.fields);
          obj.onComplete = () => this.handleClick();
          obj.added = new Date().getTime();

      this.$store.dispatch('feedback', obj);
    },
    B: B
  }
};

