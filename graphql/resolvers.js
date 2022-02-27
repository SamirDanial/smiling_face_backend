const { createModel, getModels, getFilterModel } = require('./Resolver_belongings/model_utility/model_utility');
const { getInformation } = require('./Resolver_belongings/information_utility/information_utility');

module.exports = {
    createModel: (props, res) => createModel(props, res),
    getInformation: (props, res) => getInformation(props, res),
    getModels: (props, res) => getModels(props, res),
    getFilterModel: (props, res) => getFilterModel(props, res)
}