// llenar los datos del ORM (database, user, passwod), host, dialect(a que base de datos nos conectamos)
import {Sequelize} from "sequelize";

const sequelize = new Sequelize('Kholibry', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default sequelize;