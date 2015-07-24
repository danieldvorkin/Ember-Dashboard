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

	actions: {
		addNewNews: function(){
			console.log("News Add Button Works!!!");
		},
		addNewForm: function(){
			console.log("Forms Add Button Works!!!");
		},
		addNewDoc: function(document){
			this.store.createRecord('document', document);
			this.save();
		},
		addNewContact: function(contact){
			this.store.createRecord('contact', contact);
			this.save();
		}
	}
});
