import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('assignment', 'adminmysql', 'AVNS_LY4-MCRMrcq-fZmJxcd', {
  host: 'mysql-1a918afe-happyquiz.h.aivencloud.com',
  dialect: 'mysql',
  port: 15225
});

export default sequelize;
