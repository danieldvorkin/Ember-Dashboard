import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		fileLoaded: function(file){
			var form = {
				title: file.filename,
				details: this.get('details'),
				link: file.data
			};
			this.sendAction('compAction', form);
		}
	}
});
