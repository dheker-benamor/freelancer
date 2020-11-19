'use strict';
module.exports = (sequelize, DataTypes) => {

  const Freelancer = sequelize.define('Freelancer', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ['[a-z]', 'i']
      }
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING,

    },
    website: {
      allowNull: true,
      type: DataTypes.STRING,

    }
  },{});

  Freelancer.associate = function(models) {
    Freelancer.belongsToMany(models.Project, {
      through: models.ProjectFreelancer,
      as: 'projects',
      foreignKey: 'freelancerId'
    });
  };
  return Freelancer;
};
