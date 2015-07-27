import DS from 'ember-data';

var Contact = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string')
});

export default Contact;