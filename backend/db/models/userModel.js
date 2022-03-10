const { Model, DataTypes, Sequelize } = require('sequelize')

USER_TABLE = 'users'

UserSchema = {
    id:{
        allowNull: false,
        autoIncrement:  true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

class User extends Model{
    static associate(models){
        this.hasMany( models.Operation, { as:'operations', foreignKey: 'user_id'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }