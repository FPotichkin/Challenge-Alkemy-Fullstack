const { User, UserSchema } = require('./userModel')
const { Category, CategorySchema} = require('./categoryModel')
const { Operation, OperationSchema } = require('./operationModel')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Operation.init(OperationSchema, Operation.config(sequelize))

    User.associate(sequelize.models)
    Category.associate(sequelize.models)
    Operation.associate(sequelize.models)
}

module.exports = setupModels