import DS from 'ember-data';

var Form = DS.Model.extend({
  title: DS.attr('string'),
  details: DS.attr('string')
});

Form.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "Form Number 1",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		},
		{
			id: 2,
			title: "Form Number 2",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		},
		{
			id: 3,
			title: "Form Number 3",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		},
		{
			id: 4,
			title: "Form Number 4",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		},
		{
			id: 5,
			title: "Form Number 5",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		},
		{
			id: 6,
			title: "Form Number 6",
			details: "- consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui."
		}
	]
});

export default Form;