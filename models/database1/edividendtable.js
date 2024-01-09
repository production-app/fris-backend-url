'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edividendtable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edividendtable.init({
    fileUrl: DataTypes.TEXT,
    // reason: DataTypes.STRING,
    control_id: DataTypes.STRING,
    operator:DataTypes.STRING,
    // score: {
      
    //   type: DataTypes.STRING,
    //   defaultValue: 70
    // },

    // transfer:{  
    //   type: DataTypes.STRING, 
   //   defaultValue: "NIBSS"
   // }
  }, {
    sequelize,
    modelName: 'edividendtable',
  });
  return edividendtable;
};