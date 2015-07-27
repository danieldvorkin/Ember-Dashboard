import DS from 'ember-data';

var Contact = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string')
});

Contact.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 2,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 3,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 4,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 5,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 6,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 7,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		},
		{
			id: 8,
			name: "Daniel Dvorkin",
			address: "22 Chopin Blvd, Toronto",
			phone: "(416) - 456 - 2903"
		}
	]
});

export default Contact;