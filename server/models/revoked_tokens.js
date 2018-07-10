'use strict';
module.exports = (sequelize, DataTypes) => {
  var revoked_tokens = sequelize.define('revoked_tokens', {
    jti: DataTypes.STRING
  }, {});
  revoked_tokens.associate = function(models) {
    // associations can be defined here
  };
  return revoked_tokens;
};