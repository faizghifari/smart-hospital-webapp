module.exports = (sequelize, DataTypes) => {
  const revoked_tokens = sequelize.define('revoked_tokens', {
    jti: DataTypes.STRING
  }, {});
  revoked_tokens.associate = (models) => {
    // associations can be defined here
  };
  return revoked_tokens;
};