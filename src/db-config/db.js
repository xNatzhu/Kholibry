// Importar el ORM
import { Sequelize } from "sequelize";

// Función para conectar y devolver la instancia de Sequelize
const connection = async (database, username = 'root', password = '1234', host = 'localhost', dialect = 'mysql', port = 3306) => {
    
  const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    port: port,
  })
}

connection()
