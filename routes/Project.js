const express = require('express');
const router = express.Router();
var Project = require('../controllers/Project');


router.get('/', Project.getAllProjects);

router.get('/:projectId', Project.getProjectById);
router.post('/', Project.createProject);
router.put('/:projectId', Project.updateProject);
router.put('/assignFreelancer/:projectId/:freelancerId', Project.addFreelancer);
router.delete('/:projectId', Project.deleteProject);
module.exports = router;



