
module.exports.homelist = function(req,res) {
  res.render('locations-list', { 
    title: 'Home',
    pageHeader: {
      title: 'Second Title',
      strapline: 'Find places to work with wifi near you!'
    },
    locations: [{
      name: 'Location 1',
      address: 'Address 1',
      rating: 3,
      facilities: ['Hot drinks', 'Food'],
      distance: '100m'
    },
    {
      name: 'Location 2',
      address: 'Address 2',
      rating: 3,
      facilities: ['Hot drinks', 'Food'],
      distance: '100m'
    }]
  });
};

module.exports.Info = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

module.exports.addReview = function(req, res) {
  res.render('location-review-form', {title: 'Add review'});
};

module.exports.index = function(req, res) {
  res.render('index', {title: 'Express'});
};

