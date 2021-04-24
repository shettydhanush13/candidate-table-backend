const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
    mongoConfig : {
        uri : `mongodb+srv://${process.env.mongoUser}:${encodeURIComponent(process.env.mongoPassword)}@cluster0.ejkuv.mongodb.net/${process.env.mongoCluster}?retryWrites=true&w=majority`
    },
    sendGrid : {
        apiKey : process.env.sendGridApiKey
    },
    PORT : process.env.PORT
}

module.exports = { config };