const express = require('express');
const tourcontroller = require('../controller/tourController');

const router = express.Router();
router.param('id', tourcontroller.checkID);

router
  .route('/')
  .get(tourcontroller.getAllTours)
  .post(tourcontroller.createTour);

router
  .route('/:id')
  .get(tourcontroller.getTour)
  .patch(tourcontroller.updateTour)
  .delete(tourcontroller.deleteTour);

module.exports = router;
