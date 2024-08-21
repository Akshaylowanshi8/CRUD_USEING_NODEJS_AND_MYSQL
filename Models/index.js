const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.AdminUser = require('./AdminUser')(sequelize, Sequelize);


db.Student = require('./student')(sequelize, Sequelize);
db.Address = require('./Address')(sequelize, Sequelize);



db.Student.hasOne(db.Address);
db.Address.belongsTo(db.Student );

module.exports = db;
                  