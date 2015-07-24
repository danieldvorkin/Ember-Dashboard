import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitDocument: function(){
			var doc = {
				fileName: this.get('fileName'),
				fileType: this.get('fileType'),
				fileSize: this.get('fileSize')
			};
			this.sendAction('compAction', doc);
		}
	}
});
