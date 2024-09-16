import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Tracker extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public data!: number[];
}

Tracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    sequelize,
    tableName: 'trackers',
  }
);

export default Tracker;