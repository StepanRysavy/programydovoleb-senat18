import Form from '@/components/form/do';
import B from "@/language/babylon";
import {nonEmpty, email} from '@/components/form/validators/validators';

export default {
	name: 'login',
	data: function () {
		return {
			loaded: false
		}
	},
	components: {
		'form-basic': Form
	},
	computed: {
		formLogin: function () {
			return Form.create({
				fields: [
					{
						name: 'user',
						label: 'Kdo jsi?',
						required: true,
						value: ''
					},
					{
						name: 'pass',
						label: 'Heslo',
						required: true,
						value: '',
						htmlType: 'password'
					}
				],
				buttons: [
					{
						type: 'confirm',
						label: 'Přihlásit',
						onClick: this.handleConfirm
					}
				]
			})
		} 
	},
	methods: {
		onSuccess () {
			this.$router.push(this.$store.state.route.query.redirect);
		},
		onError (message) {
			this.form.error = message;
		},
		handleConfirm () {
			this.$store.dispatch('login', {
				data: Form.values(this.formLogin),
				onComplete: this.onSuccess,
				onError: this.onError		
			});
		}
	},
	mounted: function () {
		this.loaded = true;
	}
};

