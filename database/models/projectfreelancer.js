'use strict';

module.exports = (sequelize, DataTypes) => {

  const ProjectFreelancer = sequelize.define('ProjectFreelancer', {
        projectId: DataTypes.INTEGER,
        freelancerId: DataTypes.INTEGER


      }

  ,{})


  ProjectFreelancer.associate = (models) => {
    // associations can be defined here
  };
  return ProjectFreelancer;
};
