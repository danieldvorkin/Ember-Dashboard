import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		formSubmission: function(){
			var form = {
				title: this.get('title'),
				details: this.get('details')
			};
			this.sendAction('compAction', form);
		}
	}
});
