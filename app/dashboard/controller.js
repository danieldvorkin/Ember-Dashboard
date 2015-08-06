import Ember from 'ember';

export default Ember.Controller.extend({
	icons: (function() {
		return [
			{
				link: 'https://portal.office.com/Home',
				img: 'assets/images/icons_email.png'
			},
			{
				link: '',
				img: ''
			},
			{
				link: '',
				img: ''
			},
			{
				link: '',
				img: ''
			},
			{
				link: '',
				img: ''
			},
			{
				link: '',
				img: ''
			},
			{
				link: '',
				img: ''
			},
		];
	}).property()
});
