import Ember from 'ember';

export default Ember.Component.extend({
	componentNews: function(){
		return this.get('news-property');
	}.property(),

	actions: {
		compAddNews: function(obj){
			this.sendAction('addNewAction', obj);
		},
		compDelNews: function(obj){
			this.sendAction('addDeleteAction', obj);
		}
	}
});
