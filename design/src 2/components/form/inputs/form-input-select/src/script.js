const obj = {};

obj.name = 'form-input-select';
// obj.inheritAttrs = false;
obj.props = ['data', 'validate'];
obj.components = {};

obj.data = function () {
	return {
    valid: []
  }
};

obj.computed = {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          change: function (event) {
            vm.data.value = vm.data.options[event.target.selectedIndex].value;
            vm.validate(vm.data, vm.valid);

            vm.$emit('update');
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
  this.validate(this.data, this.valid);
};
obj.updated = function () {
  this.validate(this.data, this.valid);
};

export default obj;

