import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitNews: function(){
			var news = {
				date: this.get('date'),
				content: this.get('content')
			};
			this.sendAction('compAction', news);
		}
	}
});
