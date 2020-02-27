module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reviews: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image:{
        type: DataTypes.STRING,
        defaultValue: null
      }
    });
  
    return Review;
  };
  