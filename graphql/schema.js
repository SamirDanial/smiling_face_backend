const { buildSchema } = require('graphql');

// --------------------- Types -------------------------------
const modelTypeSchema = require('./Schema_belongings/types/model_type_schema');
const modelsTypeSchema = require('./Schema_belongings/types/models_type_schema');
const pictureTypeSchema = require('./Schema_belongings/types/picture_type_schema');
const informationTypeSchema = require('./Schema_belongings/types/information_type_schema');


// --------------------- Inputs ------------------------------
const modelInputData = require('./Schema_belongings/inputs/model_input');

// -------------------- RootQuery ----------------------------
const rootQuery = require('./Schema_belongings/root_query/root_query');

// -------------------- RootMutation -------------------------
const rootMutation = require('./Schema_belongings/root_mutation/root_mutation');

// -------------------- Schema -------------------------------
const schema = require('./Schema_belongings/schema/schema');

module.exports = buildSchema(`
    ${modelTypeSchema}
    ${modelsTypeSchema}
    ${pictureTypeSchema}
    ${informationTypeSchema}

    ${modelInputData}

    ${rootQuery}

    ${rootMutation}

    ${schema}
`)