require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        usersname: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'vallita23',
        dbName: process.env.DB_NAME
    }
}

module.exports = config