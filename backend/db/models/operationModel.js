const { Model, DataTypes, Sequelize } = require('sequelize')
const { USER_TABLE } = require('./userModel')
const { CATEGORY_TABLE } = require('./categoryModel')



const OPERATION_TABLE = 'operations'

const OperationSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    concept:{
        allowNull: false,
        type: DataTypes.STRING
    },
    date:{
        allowNull: false,
        type: DataTypes.DATE
    },
    type:{
        allowNull: false,
        type: DataTypes.STRING
    },
    quantity:{
        allowNull: false,
        type: DataTypes.FLOAT
    },
    categoryId:{
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: CATEGORY_TABLE,
            key: 'id'
        }
    },
    userId:{
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: USER_TABLE,
            key: 'id'
        }  
    },
    
}

class Operation extends Model {
    static associate(models){
        this.belongsTo(models.User, {as:'user'})
        this.belongsTo(models.Category, {as:'category'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: OPERATION_TABLE,
            modelName: 'Operation',
            timestamps: false
        }
    }
}

module.exports = { OPERATION_TABLE , OperationSchema, Operation }