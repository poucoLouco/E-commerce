const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    tag_name: {
      type: DataTypes.CHAR,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
