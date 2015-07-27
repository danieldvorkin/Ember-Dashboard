import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			documents: this.store.find('document'),
			news: this.store.find('news'),
			forms: this.store.find('form'),
			contacts: this.store.find('contact'),
			rosters: this.store.find('roster')
		};
	},
	actions: {
		addNewNews: function(news){
			this.store.createRecord('news', news);
		},
		addNewForm: function(form){
			this.store.createRecord('form', form);
		},
		addNewDoc: function(document){
			var newDoc = this.store.createRecord('document', document);
			newDoc.save().then(function(){
				console.log("New document has been added");
			}, function(){
				console.log("Save Failed!!!");
			});
		},
		addNewContact: function(contact){
			var newContact = this.store.createRecord('contact', contact);
			newContact.save().then(function(){
				console.log("new contact added to system");
			},function(){
				console.log("Failed");
			});
		}
	}
});
