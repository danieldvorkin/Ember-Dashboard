import DS from 'ember-data';

var Roster = DS.Model.extend({
  name: DS.attr('string'),
});

Roster.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Daniel Dvorkin"
		},
		{
			id:2,
			name: "Amanda Karta"
		},
		{
			id: 3,
			name: "Daniel Dvorkin"
		},
		{
			id:4,
			name: "Amanda Karta"
		},
		{
			id: 5,
			name: "Daniel Dvorkin"
		},
		{
			id:6,
			name: "Amanda Karta"
		},
	]
});
export default Roster;
