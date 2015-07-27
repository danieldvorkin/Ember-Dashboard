import Ember from 'ember';

export default Ember.Component.extend({
	componentRosters: function(){
		return this.get('rosters-property');
	}.property(),
	actions: {
		compAddRoster: function(obj){
			this.sendAction('addNewAction', obj);
		}
	}
});
