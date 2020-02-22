module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
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

  return Book;
};
