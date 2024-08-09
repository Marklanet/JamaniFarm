import sequelize from '../utils/db';
import User from './userModel';
import Chart from './chartModel';

const models = {
  User: User.initModel(sequelize),
  Chart: Chart.initModel(sequelize),
};

// Define associations
models.User.hasMany(models.Chart, { foreignKey: 'userId', as: 'charts' });
models.Chart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

export { sequelize };
export default models;
