import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitEntry: function(){
			var contact = {
				name: this.get('name'),
				address: this.get('address'),
				phone: this.get('phone')
			};
			this.sendAction('compAction', contact);
		}
	}
});
