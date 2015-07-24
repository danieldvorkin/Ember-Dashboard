import Ember from 'ember';

export default Ember.Component.extend({
	componentForms: function(){
		return this.get('forms-property');
	}.property(),
	actions: {
		compAddForm: function(){
			this.sendAction('addNewAction');
		}
	}
});
