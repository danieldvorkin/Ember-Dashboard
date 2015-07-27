import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitNews: function(){
			var news = {
				date: new Date(),
				content: this.get('content')
			};
			this.sendAction('compAction', news);
		}
	}
});
