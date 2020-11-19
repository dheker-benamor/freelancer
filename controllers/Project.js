const models = require("../database/models");

exports.createProject = async (req, res) => {
    try {
        const post = await models.Project.create(req.body);
        return res.status(201).json({
            post
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await models.Project.findAll({
            include: [
                {
                    model: models.Freelancer,
                    as: "freelancers"
                },
            ]
        });
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.updateProject = async (req, res) => {
    try {
        const {projectId} = req.params;
        const [updated] = await models.Project.update(req.body, {
            where: {id: projectId}
        });
        if (updated) {
            const updatedProject = await models.Project.findOne({where: {id: projectId}});
            return res.status(200).json({project: updatedProject});
        }
        throw new Error("Project not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const {projectId} = req.params;
        const deleted = await models.Project.destroy({
            where: {id: projectId}
        });
        if (deleted) {
            return res.status(204).send("Project deleted");
        }
        throw new Error("Project not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
exports.getProjectById = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await models.Project.findOne({
            where: { id: projectId },
            include: [
                {
                    model: models.Freelancer,
                    as: "freelancers"
                },
            ]        });
        if (project) {
            return res.status(200).json( project );
        }
        return res.status(404).send("Project with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
exports.addFreelancer = (req, res) => {
    const { projectId } = req.params;
    const { freelancerId } = req.params;

    models.Project.findByPk(projectId)
        .then((project) => {
            if (!project) {
                throw new Error("Project not found!");
            }
            return models.Freelancer.findByPk(freelancerId).then((freelancer) => {
                if (!freelancer) {
                    throw new Error("Freelancer not found!");
                }

                project.addFreelancer(freelancer);
                return res.status(204).send(project);
            }) .catch((error) => {
                return res.status(500).send(error.message);
            });
        })
        .catch((error) => {
            return res.status(500).send(error.message);
        });
};
