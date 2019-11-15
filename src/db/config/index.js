const config = {
  url: 'localhost',
  port: process.env.MONGODB_PORT || 27017,
  database: process.env.MONGODB_DB || 'api-restDB',
  username: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD
}

module.exports = config