import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			document: this.store.find('document'),
			news: this.store.find('news'),
			form: this.store.find('form'),
			contact: this.store.find('contact'),
			roster: this.store.find('roster')
		};
	},
	actions: {
		addNewNews: function(news){
			this.store.createRecord('news', news);
		},
		addNewForm: function(form){
			this.store.createRecord('form', form);
		},
		addNewDoc: function(doc){
			this.store.createRecord('document', doc);
		},
		addNewContact: function(contact){
			this.store.createRecord('contact', contact);
		}
	}
});
