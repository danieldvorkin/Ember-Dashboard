import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		$('.hide-feature').on('click', function(){
	    $('#footer-hide').slideUp(800);
	    $('.hide-feature').hide();
	    $('.show-feature').show();
	  });

	  $('.show-feature').on('click', function(){
	    $('#footer-hide').slideDown(800);
	    $('.show-feature').hide();
	    $('.hide-feature').show();
	  });
	},
	icons: (function() {
		return [
			{
				link: 'https://portal.office.com/Home',
				img: 'assets/images/icons_email.png',
				notifications: 1
			},
			{
				link: '#',
				img: 'assets/images/icons_chat.png',
				notifications: 2
			},
			{
				link: '#',
				img: 'assets/images/icons_phone.png',
				notifications: 3
			},
			{
				link: '#',
				img: 'assets/images/icons_emr.png',
				notifications: 4
			},
			{
				link: 'https://iar.williamoslerhs.ca/concerto/Login.htm',
				img: 'assets/images/icons_iar.png',
				notifications: 0
			},
			{
				link: 'https://parc.roxysoftware.com/login.asp',
				img: 'assets/images/icons_roxy.png',
				notifications: 0
			},
			{
				link: 'https://demo.vconsult.me',
				img: 'assets/images/icons_vC.png',
				notifications: 0
			},
			{
				link: 'https://portal.office.com/Home',
				img: 'assets/images/icons_office.png',
				notifications: 0
			},
			{
				link: 'https://poc.obsidix.com/',
				img: 'assets/images/icons_obsidix.png',
				notifications: 0
			},
			{
				link: 'https://poc.obsidix.com/RDWeb/',
				img: 'assets/images/icons_mydesctop.png',
				notifications: 0
			},
			{
				link: 'https://portal.office.com/Home',
				img: 'assets/images/icons_setting.png',
				notifications: 0
			},
		];
	}).property(),

	notificationCount: (function(){
		var result = Ember.compare('notifications', 0);
		if(result === 0){
			return false;
		} else {
			return true;
		}
	}).property('notifications')
});
