import Ember from 'ember';

export default Ember.Component.extend({
	dropdownOpen: false,
	actions: {
		toggleDropdown: function(){
			this.toggleProperty('dropdownOpen');
		},
	}
});
