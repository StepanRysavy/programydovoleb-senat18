const obj = {};

obj.name = 'form-input-text';
// obj.inheritAttrs = false;
obj.props = ['data', 'validate'];
obj.components = {};

obj.data = function () {
	return {
    valid: [],
    loaded: false
  }
};

obj.computed = {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {

            vm.loaded = false;

            vm.data.value = event.target.value;
            vm.validate(vm.data, vm.valid);

            vm.$emit('update');

            vm.loaded = true;

            // vm.$emit('input', event.target.value)
          }
        }
      )
    }

}
obj.methods = {
  handleInput: function (e) {
    data.value = e.target.value;
  }
};
obj.mounted = function () {
  this.loaded = true;
  this.validate(this.data, this.valid);
};
obj.updated = function () {
  this.validate(this.data, this.valid);
};

export default obj;

