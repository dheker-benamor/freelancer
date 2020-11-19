const express = require('express');
const router = express.Router();
var Freelancer = require('../controllers/Freelancer');


router.get('/', Freelancer.getAllFreelancers);

router.get('/:freelancerId', Freelancer.getFreelancerById);
router.post('/', Freelancer.createFreelancer);



module.exports = router;
