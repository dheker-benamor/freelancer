const models = require("../database/models");

exports.createFreelancer = async (req, res) => {
    try {
        const freelancer = await models.Freelancer.create(req.body);
        return res.status(201).json({
            freelancer
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};
exports.getAllFreelancers = async (req, res) => {
    try {
        const freelancers = await models.Freelancer.findAll({
            include: [
                {
                    model: models.Project,
                    as: "projects"
                },
            ]
        });
        return res.status(200).json(freelancers);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.updateFreelancer = async (req, res) => {
    try {
        const {freelancerId} = req.params;
        const [updated] = await models.Freelancer.update(req.body, {
            where: {id: freelancerId}
        });
        if (updated) {
            const updatedFreelancer = await models.Freelancer.findOne({where: {id: freelancerId}});
            return res.status(200).json({freelancer: updatedFreelancer});
        }
        throw new Error("Freelancer not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.deleteFreelancer = async (req, res) => {
    try {
        const {freelancerId} = req.params;
        const deleted = await models.Freelancer.destroy({
            where: {id: freelancerId}
        });
        if (deleted) {
            return res.status(204).send("Freelancer deleted");
        }
        throw new Error("Freelancer not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
exports.getFreelancerById = async (req, res) => {
    try {
        const { freelancerId } = req.params;
        const freelancer = await models.Freelancer.findOne({
            where: { id: freelancerId },
            include: [
                {
                    model: models.Project,
                    as: "projects"
                },
            ]        });
        if (freelancer) {
            return res.status(200).json(freelancer );
        }
        return res.status(404).send("freelancer with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
