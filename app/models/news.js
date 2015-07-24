import DS from 'ember-data';

var News = DS.Model.extend({
  date: DS.attr('date'),
  content: DS.attr('string')
});

News.reopenClass({
	FIXTURES: [
		{ 
			id: 1, 
			date: new Date(), 
			content: "- Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui. Suspendisse lacinia tellus lacus, sed feugiat velit commodo in. Cras magna lectus, imperdiet vel eleifend viverra, varius ut dolor. Etiam dapibus tellus sed est lacinia, at blandit dui viverra. Vivamus quis massa et dui venenatis volutpat eu aliquet nisl."
		},
		{ 
			id: 2, 
			date: new Date(), 
			content: "- Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui. Suspendisse lacinia tellus lacus, sed feugiat velit commodo in. Cras magna lectus, imperdiet vel eleifend viverra, varius ut dolor. Etiam dapibus tellus sed est lacinia, at blandit dui viverra. Vivamus quis massa et dui venenatis volutpat eu aliquet nisl."
		},
		{ 
			id: 3, 
			date: new Date(), 
			content: "- Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui. Suspendisse lacinia tellus lacus, sed feugiat velit commodo in. Cras magna lectus, imperdiet vel eleifend viverra, varius ut dolor. Etiam dapibus tellus sed est lacinia, at blandit dui viverra. Vivamus quis massa et dui venenatis volutpat eu aliquet nisl."
		},
		{ 
			id: 4, 
			date: new Date(), 
			content: "- Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla ultricies, odio nec suscipit venenatis, purus neque elementum libero, quis sodales magna orci a dui. Suspendisse lacinia tellus lacus, sed feugiat velit commodo in. Cras magna lectus, imperdiet vel eleifend viverra, varius ut dolor. Etiam dapibus tellus sed est lacinia, at blandit dui viverra. Vivamus quis massa et dui venenatis volutpat eu aliquet nisl."
		}
	]
});

export default News;

// <a href="PARC.html">PARC</a>