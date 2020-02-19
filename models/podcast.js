module.exports = function(sequelize, DataTypes) {
    var Podcast = sequelize.define("Podcast", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reviews: {
        type: DataTypes.TEXT,
        allowNull: false
      // },
      // favorites:{
      //   defaultValue: null
      }
    });
  
    return Podcast;
  };
  