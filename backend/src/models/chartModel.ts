import { DataTypes, Model, Sequelize } from 'sequelize';
import User from './userModel';

export default class Chart extends Model {
  public id!: number;
  public userId!: number;
  public title!: string;
  public userInput!: string;
  public systemResponse!: string;
  public date!: Date;

  public static initModel(sequelize: Sequelize): typeof Chart {
    Chart.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userInput: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      systemResponse: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      sequelize,
      tableName: 'charts',
    });

    return Chart;
  }
}
