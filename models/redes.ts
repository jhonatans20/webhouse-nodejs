import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Redes = db.define('redes', {
    idRed: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreRed: {
        type: DataTypes.STRING
    },
    urlRed: {
        type: DataTypes.STRING
    },
    iconRed: {
        type: DataTypes.STRING
    },
    estadoRed: {
        type: DataTypes.BOOLEAN
    }
});


export default Redes;