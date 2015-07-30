import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		fileLoaded: function(file){
			if(file.size > 85){
				alert('File is too big.... sorry, try again!!!!!');
			}else {
				var form = {
					title: file.filename,
					details: this.get('details'),
					link: file.data
				};
				this.sendAction('compAction', form);
			}
		}
	}
});
