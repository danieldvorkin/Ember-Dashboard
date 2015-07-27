import DS from 'ember-data';

var Roster = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});

export default Roster;
