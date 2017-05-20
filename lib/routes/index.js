var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');


// Locations
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.Info);
router.get('/location/review/new', ctrlLocations.addReview);


module.exports = router;

