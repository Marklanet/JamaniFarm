import { DataTypes, Model, Sequelize } from 'sequelize';

export default class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;

  public static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'users',
    });

    return User;
  }
}
