# Node.js REST API

REST API for Guideline iOS and Android App


## Core
### express
Express provides small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

Package(s)
  * [express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework

Implemented in
  * index.js
  * routes/?.js
  * libs/boot.js
  * libs/config.js
  * libs/middlewares.js

Usage Example
```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

### body-parser
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Package(s)
  * [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware

Implemented in
  * libs/middlewares.js -
  * routes/?.js

Usage Example
```js
app.get('/', (req, res) => {
  res.json({
    status: "NaughtyRestAPI"
  });
});
```

### Babel

To use all features from ES6/ES7

Pckages(s)
  * [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli)
  * [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)

Implemented in
  * .babelrc
  * package.json

### consign
Package(s)
  * [consign](https://github.com/jarradseers/consign) - Autoload your scripts.

Implemented in
  * index.js

Usage Example
```bash
$ babel-node index.js
```


## Database
### Sequelize.js
Package(s)
  * [sequelize](https://github.com/sequelize/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.
    * [Docs](http://docs.sequelizejs.com/en/v3/)

Implemented in
  * db.js - Basic Setup
  * config.?.js - Database config
  * models/?.js - Database models
  * libs/boot.js - Module initialization

### MySQL
Package(s)
  * [mysql](https://github.com/mysqljs/mysql) - A pure node.js JavaScript Client implementing the MySql protocol

Implemented in
  * /libs/config.?.js

### MongoDB

## Performance
### cluster
Package(s)
  * cluster - The cluster module allows you to easily create child processes that all share server ports.
  * os - (Optional) module to get the number of cpus

Implemented in
  * clusters.js
  * package.json

### compression
Package(s)
  * [compression](https://github.com/expressjs/compression) - Node.js compression middleware

Implemented in
  * lib/middlewares.js


## Security
### HTTPS
Package(s)
  * https - HTTP protocol over TLS/SSL

Implemented in
  * libs/boot.js

To create fake credentials, visit:
  * [Self-Signed Certificate Generator](http://www.selfsignedcertificate.com)

### cors
Package(s)
  * [cors](https://github.com/expressjs/cors) - A node.js package that provides an Express/Connect middleware to enable Cross Origin Resource Sharing (CORS) with various options.
    * [Access Control Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

Implemented in
  * libs/middlewares.js

### helmet
Package(s)
  * [helmet](https://github.com/helmetjs/helmet) - Help secure Express apps with various HTTP headers

Implemented in
  * libs/middlewares.js


## Logging
Package(s)
  * [winston](https://github.com/winstonjs/winston) - a multi-transport async logging library for node.js
  * [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js

Implemented in
  * libs/logger.js
  * libs/config.?.js
  * libs/middlewares.js

The module creates app.log in /logs
