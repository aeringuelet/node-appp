const configValues = require('./config');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.dbUser}:${configValues.dbPwd}@${configValues.dbHost}:${configValues.dbPort}/${configValues.dbName}`;
    }
}