import Ember from 'ember';

export default Ember.Component.extend({
	componentNews: function(){
		return this.get('news-property');
	}.property(),

	actions: {
		compAddNews: function(){
			this.sendAction('addNewAction');
		}
	}
});
