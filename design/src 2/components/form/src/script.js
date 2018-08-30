import ButtonConfirm from "@/components/buttons/button-confirm/do";

import FormInputText from "../inputs/form-input-text/do";
import FormInputTextArea from "../inputs/form-input-textarea/do";
import FormInputCheckbox from "../inputs/form-input-checkbox/do";
import FormInputRadio from "../inputs/form-input-radio/do";
import FormInputSelect from "../inputs/form-input-select/do";
import FormInputLabel from "../inputs/form-input-label/do";

import {nonEmpty, email, radio, select} from '@/components/form/validators/validators';

const obj = {};

obj.name = 'form-basic';
obj.props = ['data'];
obj.components = {
	'form-input-text': FormInputText,
	'form-input-textarea': FormInputTextArea,
	'form-input-checkbox': FormInputCheckbox,
	'form-input-radio': FormInputRadio,
	'form-input-select': FormInputSelect,
	'form-input-label': FormInputLabel,
	'button-confirm': ButtonConfirm
};

obj.data = function () {
	return {
		valid: this.validateForm() || false
	}
};

obj.computed = {}

obj.methods = {
  validate: function (data, valid) {
    var result = true,
        message = [],
        test;

    valid = [];

    data.validate.forEach(function (validation) {
      test = validation(data);

      valid.push(test);

      if (test.result === false) {
        result = false;
        message.push (test.message);
      }
    });

    data.error = message;
    data.valid = result;

    if (data.validateOnlyIfNotEmpty === true) {

    	if (nonEmpty(data).result === false) {

    		data.error = [];
    		data.valid = true; 
    		data.message = [];
    		valid = [true];
    	}
    }

    return valid;

  },
  validateForm: function () {
  	this.valid = this.data.fields.every((field) => field.valid === true);
  },
  formEmitedUpdate: function () {
  	this.validateForm();
	this.$emit('update');
  }
};

obj.mounted = function () {
	this.validateForm();
};

obj.updated = function () {
	this.validateForm();
}

obj.values = function (data) {
	var result = {};

	data.fields.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;
}

obj.create = function (options) {
	
	options.headline = options.headline || "";
	options.valid = options.valid || false;
	options.error = options.error || "";

	options.fields.forEach (function (field, index) {
		field.error = field.error || [];
		field.placeholder = field.placeholder || "";
		field.label = field.label || "Form field";
		field.valid = field.valid || false;
		field.type = field.type || 'text';
		field.validate = field.validate || [];
		field.required = field.required || false;
		field.validateOnlyIfNotEmpty = field.validateOnlyIfNotEmpty || false;

		field.name = field.name || "FORM_" + (new Date().getTime()) + "_FIELD_" + index + "_" + field.type; 

		if (['hidden', 'checkbox'].indexOf(field.type) > -1) {
			field.valid = true;
		}

		if (['text'].indexOf(field.type) > -1) {
			field.value = field.value || '';

			if (field.required === true && field.validate.length === 0) field.validate = [nonEmpty];
		}

		if (['checkbox'].indexOf(field.type) > -1) {
			field.value = field.value ||  0;
		}

		if (['radio'].indexOf(field.type) > -1) {

			field.options.forEach(function (option, index) {
				if (typeof option.value === "undefined") option.value = index;
			});

			if (field.required === true) {
				field.value = field.value ||  field.options[0].value;

				if (field.validate.length === 0) field.validate = [radio];
			} else {
				field.value = field.value ||  null;
			}
			
		}

		if (['select'].indexOf(field.type) > -1) {

			var firstNotDisabled = undefined, iterator = 0;

			field.options.forEach(function (option, index) {
				if (typeof option.disabled === "undefined") option.disabled = false;

				if (option.disabled === false && !firstNotDisabled) firstNotDisabled = option;

				if (option.disabled === true) {
					if (typeof option.value === "undefined") option.value = null;
				} else {
					if (typeof option.value === "undefined") option.value = iterator;
					iterator++;
				}
			});

			if (field.required === true) {
				field.value = field.value || firstNotDisabled.value;
			} else {
				field.value = field.value || (field.options[0].disabled === true ? null : field.options[0].value);
			}

			if (field.required === true && field.validate.length === 0) field.validate = [select];
		}		

	});

	options.buttons.forEach(function (button) {
		button.type = button.type || 'basic';
	});

	return options;

}

export default obj;

