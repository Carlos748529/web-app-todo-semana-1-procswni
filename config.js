import { createPool } from "mysql2"; 

// Cargar las variables de entorno
import dotenv from "dotenv"; 
dotenv.config()

//Confugurar la conexion a la base de datos 
const config = createPool ( { 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true,
    });

    //Verificar la conexion a la base de datos 
    config.getConnection((err, connection) => { 
        if (err) { // Si hay algun error 
              console.log("Error al conectar a la base de datos :, err"); 
            }
            // si no tengo error 
            if ( connection ) connection .release();
            console.log("conexion exitosa a la base de datos ");
            return ;

    })
    
    export default config;
