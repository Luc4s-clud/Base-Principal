module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    ds_email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'usuarios'
  });

  return User;
};
