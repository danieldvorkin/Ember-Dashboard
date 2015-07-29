import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		fileLoaded: function(file){
			console.log(file.filename, file.type, file.size, file.data);
			var newSize = file.size / 1024;
			var doc = {
				fileName: file.filename,
				fileType: file.type,
				fileSize: newSize,
				link: file.data
			};
			this.sendAction('compAction', doc);
		}
	}
});
