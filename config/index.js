var configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.dbUser}:${configValues.dbPwd}@${configValues.dbHost}:${configValues.dbPort}/${configValues.dbName}`;
    }
}