import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		fileLoaded: function(file){
			console.log(file.filename, this.get('details'));
			var form = {
				title: file.filename,
				details: this.get('details'),
				link: file.data
			};
			this.sendAction('compAction', form);
		}
	}
});
