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
			var newNews = this.store.createRecord('news', news);
			newNews.save().then(function(){
				console.log("Save Successful");
			}, function(){
				console.log("Save Failed!!!");
			});
		},
		deleteNews: function(news){
			news.deleteRecord();
			news.save();
		},
		addNewForm: function(form){
			var newForm = this.store.createRecord('form', form);
			newForm.save().then(function(){
				console.log("Save Successful");
			}, function(){
				console.log("Save Failed!!!");
			});
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
		},
		addNewRoster: function(roster){
			var newRoster = this.store.createRecord('roster', roster);
			newRoster.save().then(function(){
				console.log("new client added to system");
			}, function(){
				console.log("Failed Save!!!");
			});
		}
	}
});
