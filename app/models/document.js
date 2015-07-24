import DS from 'ember-data';

var Document = DS.Model.extend({
  fileName: DS.attr('string'),
  fileType: DS.attr('string'),
  fileSize: DS.attr('number')
});

Document.reopenClass({
	FIXTURES: [
		{
			id: 1,
			fileName: "Document 1",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 2,
			fileName: "Document 2",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 3,
			fileName: "Document 3",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 4,
			fileName: "Document 4",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 5,
			fileName: "Document 5",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 6,
			fileName: "Document 6",
			fileType: "PDF",
			fileSize: 1.6
		},
		{
			id: 7,
			fileName: "Document 7",
			fileType: "PDF",
			fileSize: 1.6
		},
	]
});

export default Document;