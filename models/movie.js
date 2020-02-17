module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
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
  
    return Movie;
  };
  