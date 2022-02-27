const model = require('../../../models/model');
const Model = require('../../../models/model');

module.exports = {
    getFilterModel: async ({ textSearch, flag, hairColor, profession, PageNumber, PageSize }, res) => {
        let models;
        let count;
        if (hairColor !== "") {
            count = await model.find({ hairColor: hairColor }).count();
            models = await model.find({ hairColor: hairColor }).skip((PageNumber - 1) * PageSize).limit(PageSize);
        }

        if (profession !== "") {
            count = await model.find({ profession: profession }).count();
            models = await model.find({ profession: profession }).skip((PageNumber - 1) * PageSize).limit(PageSize);
        }

        if (flag === 'firstName') {
            count = await model.find({ firstName: { $regex: new RegExp(textSearch, "i") } }).count();
            models = await Model.find({ firstName: { $regex: new RegExp(textSearch, "i") } }).skip((PageNumber - 1) * PageSize).limit(PageSize);
        }

        if (flag === 'lastName') {
            count = await Model.find({ lastName: { $regex: new RegExp(textSearch, "i") } }).count();
            models = await Model.find({ lastName: { $regex: new RegExp(textSearch, "i") } }).skip((PageNumber - 1) * PageSize).limit(PageSize);
        }

        if (flag === "" && profession === "" && hairColor === "") {
            count = await model.find().count();
            models = await model.find().skip((PageNumber - 1) * PageSize).limit(PageSize);
        }

        return {
            models: [...models.map(model => {
                return {
                    ...model._doc,
                    _id: model._id.toString()
                }
            })],
            modelsCount: count
        }
    },
    createModel: async ({ userInput }, res) => {
        const model = new Model({
            ...userInput
        })

        const savedModel = await model.save();

        return {
            ...savedModel._doc,
            _id: savedModel._id.toString()
        }
    },
    getModels: async ({ PageNumber, PageSize }, res) => {
        const count = await model.count();
        const models = await model.find().skip((PageNumber - 1) * PageSize).limit(PageSize);
        return {
            models: [...models.map(model => {
                return {
                    ...model._doc,
                    _id: model._id.toString()
                }
            })],
            modelsCount: count
        }
    }
}