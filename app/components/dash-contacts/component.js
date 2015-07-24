import Ember from 'ember';

export default Ember.Component.extend({
	componentContacts: function(){
		return this.get('contacts-property');
	}.property(),
	actions: {
		compAddContact: function(obj){
			this.sendAction('addNewAction', obj);
		}
	}
});
