import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', 'poyan1896', {
    host : 'localhost',
    dialect : 'mysql'
});

export default db;