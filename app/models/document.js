import DS from 'ember-data';

var Document = DS.Model.extend({
  fileName: DS.attr('string'),
  fileType: DS.attr('string'),
  fileSize: DS.attr('number'),
  link: DS.attr('string')
});

export default Document;