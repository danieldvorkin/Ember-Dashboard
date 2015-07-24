import Ember from 'ember';

export default Ember.Component.extend({
	componentDocs: function(){
		return this.get('docs-property');
	}.property(),
	actions: {
		compAddDoc: function(obj){
			this.sendAction('addNewAction', obj);
		}
	}
});
