import DS from 'ember-data';

var Roster = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});

Roster.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Daniel Dvorkin",
			email: "Dvorkin212@me.com"
		},
		{
			id:2,
			name: "Amanda Karta",
			email: "Dvorkin212@me.com"
		},
		{
			id: 3,
			name: "Daniel Dvorkin",
			email: "Dvorkin212@me.com"
		},
		{
			id:4,
			name: "Amanda Karta",
			email: "Dvorkin212@me.com"
		},
		{
			id: 5,
			name: "Daniel Dvorkin",
			email: "Dvorkin212@me.com"
		},
		{
			id:6,
			name: "Amanda Karta",
			email: "Dvorkin212@me.com"
		},
	]
});
export default Roster;
