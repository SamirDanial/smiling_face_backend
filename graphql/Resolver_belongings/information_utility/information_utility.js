const Information = require('../../../models/information');

module.exports = {
    getInformation: async (props, res) => {
        const info = await Information.find();

        return {
            ...info[0]._doc,
            _id: info[0]._id.toString()
        }
    }
}