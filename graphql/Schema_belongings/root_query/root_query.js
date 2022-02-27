module.exports = `
type RootQuery {
        getModelById(ID: String): Model
        getModels(PageNumber: Int, PageSize: Int): Models
        getFilterModel(textSearch: String, flag: String, hairColor: String, profession: String, PageNumber: Int, PageSize: Int): Models
        getInformation: Information
    }
`;