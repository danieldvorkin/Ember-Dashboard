import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		fileLoaded: function(file){
			console.log(file.filename, file.type, file.size, file.data);
			var newSize = file.size / 1024;
			var formattedSize = Math.round(newSize);

			if(formattedSize > 80){
				alert("File is too big");
			}
			else {
				var doc = {
					fileName: file.filename,
					fileType: file.type,
					fileSize: formattedSize,
					link: file.data
				};
				console.log(formattedSize);
				this.sendAction('compAction', doc);
			}
		}
	}
});
