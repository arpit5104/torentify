import { DataTypes } from "sequelize";

export default (sequelize) =>
  sequelize.define(
    "blogs",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING
    },
    { timestamps: true }
  );
