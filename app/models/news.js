import DS from 'ember-data';

var News = DS.Model.extend({
  date: DS.attr('date'),
  content: DS.attr('string')
});

export default News;