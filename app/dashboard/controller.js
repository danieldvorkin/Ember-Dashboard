import Ember from 'ember';

export default Ember.Controller.extend({
	documents: (function (){
		return this.store.find('document');
	}).property(),
	
	news: (function(){
		return this.store.find('news');
	}).property(),

	contacts: (function(){
		return this.store.find('contact');
	}).property(),

	forms: (function(){
		return this.store.find('form');
	}).property(),
	
	rosters: (function(){
		return this.store.find('roster');
	}).property(),

	actions: {
		addNewNews: function(news){
			this.store.createRecord('news', news);
		},
		addNewForm: function(form){
			this.store.createRecord('form', form);
		},
		addNewDoc: function(document){
			this.store.createRecord('document', document);
		},
		addNewContact: function(contact){
			var contact = this.store.createRecord('contact', contact);
			contact.save();
		}
	}
});
