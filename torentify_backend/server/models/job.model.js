import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Job = sequelize.define(
    "jobs",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {                      // ✅ NEW
        type: DataTypes.STRING,
        allowNull: true,
      },

      jobType: {                      // ✅ NEW
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      applyUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },

      applicantCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
    }
  );

  /**
   * ✅ SAFE TABLE UPDATE
   * - Adds applicantCount if missing
   * - Keeps old data
   * - Prevents POST crash
   */
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("✅ jobs table synced successfully");
    })
    .catch((err) => {
      console.error("❌ jobs table sync failed:", err.message);
    });

  return Job;
};
