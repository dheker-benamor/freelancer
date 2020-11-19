'use strict';

module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define('Project', {
          name: {
            allowNull: false,
            type: DataTypes.STRING,

          },
          startDate: {
            allowNull: false,
            type: DataTypes.DATEONLY,

          },
          endDate: {
            allowNull: false,
            type: DataTypes.DATEONLY,

          },
          duration: {
            allowNull: false,
            type: DataTypes.STRING,

          },
          type: {
            allowNull: false,
            type: DataTypes.STRING,

          }
        }
        , {});

    Project.associate = function(models) {
        Project.belongsToMany(models.Freelancer, {
            through: models.ProjectFreelancer,
            as: 'freelancers',
            foreignKey: 'projectId'
        });
    };

    return Project;
};
