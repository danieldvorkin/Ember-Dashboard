import DS from 'ember-data';

var Form = DS.Model.extend({
  title: DS.attr('string'),
  details: DS.attr('string')
});

export default Form;