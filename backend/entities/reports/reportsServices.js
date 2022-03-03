const { getAll } = require('../operations/operationsServices')

const calcBalance = async (userId) => {

    //getAll from operations Services
    const operationsList = await getAll(userId)

    let deposit = 0
    let withdraw = 0

    operationsList.forEach(operation => {
        if(operation.type == 'deposit'){
            deposit += operation.quantity
        } else {
            withdraw += operation.quantity
        }        
    });
    return( deposit - withdraw)
}

module.exports = { calcBalance }