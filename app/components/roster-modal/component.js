import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitEntry: function(){
			var roster = {
				name: this.get('name'),
				email: this.get('email')
			};
			this.sendAction('compAction', roster);
		}
	}
});
