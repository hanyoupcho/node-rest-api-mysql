# Node.js REST API

REST API for App Backend Service


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
  * libs/middlewares.js - Make global json parsing function
  * routes/?.js - used for parsing json-structured body

Usage Example
```js
app.get('/', (req, res) => {
  res.json({
    status: "NaughtyRestAPI"
  });
});
```

### Babel
To use all features from ES6/ES7 (current Node.js doesn't fully support latest js)

Pckages(s)
  * [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli)
  * [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)

Implemented in
  * .babelrc - Configuration
  * package.json - Used for scripts

Usage Example
```bash
$ babel-node index.js
```

### consign
Consign makes applications easier to develop with logical file separation and automatic script loading.

Consign can be used to autoload models, routes, schemas, configs, controllers, object maps... etc...

Package(s)
  * [consign](https://github.com/jarradseers/consign) - Autoload your scripts.

Implemented in
  * index.js

Usage Example
```js
consign({
    verbose: false
  })
  .include('libs/config.js')
  .then('db.js')
  .then('auth.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
```


## Database
### Sequelize.js
Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.

Package(s)
  * [sequelize](https://github.com/sequelize/sequelize)
    * [Docs](http://docs.sequelizejs.com/en/v3/)

Implemented in
  * db.js - Basic Setup
  * config.?.js - Database config
  * models/?.js - Database models
  * libs/boot.js - Module initialization

Usage Example
```js
app.post('/users', (req, res) => {
  Users.create(req.body)
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(error => {
      res.status(412).json({
        msg: error.message
      });
    });
});
```

### MySQL
Package(s)
  * [mysql](https://github.com/mysqljs/mysql) - A pure node.js JavaScript Client implementing the MySql protocol

Implemented in
  * /libs/config.?.js

Usage Example
```js
// Querying is handled by Sequelize.js
```

### MongoDB

Usage Example
```js
// Querying is handled by Sequelize.js
```

## Performance
### cluster
Package(s)
  * cluster - The cluster module allows you to easily create child processes that all share server ports.
  * os - (Optional) module to get the number of cpus

Implemented in
  * clusters.js
  * package.json

Usage Example
```js
const CPUS = os.cpus();

if (cluster.isMaster) {
  CPUS.forEach(() => cluster.fork());
  cluster.on('exit', worker => {
    cluster.fork();
  });
} else {
  require('./index.js');
}
```

### compression
Compression uses gzip or deflate to compress traffic which makes the more responding server.

Package(s)
  * [compression](https://github.com/expressjs/compression) - Node.js compression middleware

Implemented in
  * lib/middlewares.js

Usage Example
```js
var compression = require('compression')
var express = require('express')

var app = express()

// compress all responses
app.use(compression())

// add all routes
```


## Security
### HTTPS
Package(s)
  * https - HTTP protocol over TLS/SSL
    * [docs]()

Implemented in
  * libs/boot.js

Usage Example
```js

```

To create fake credentials for development purposes, visit:
  * [Self-Signed Certificate Generator](http://www.selfsignedcertificate.com)

### Passport + JWT
JSON Web Tokens (JWT) is a very simple and secure authentication strategy for REST APIs. It is an open standard for web authentication and is based on the JSON token’s requests between client and server.

Package(s)
  * [passport](https://github.com/jaredhanson/passport) - Simple, unobtrusive authentication for Node.js
  * [passport-jwt](https://www.npmjs.com/package/passport-jwt) -  Passport strategy for authenticating with a JSON Web Token. This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
  * [jwt-simple](https://www.npmjs.com/package/jwt-simple) - JWT(JSON Web Token) encode and decode module
  * [bcrypt](https://github.com/pyca/bcrypt) - Modern password hashing for your software and your servers

Implemented in
  * auth.js - Authentication method configured
  * libs/config.?.js - Key defined
  * libs/middlewares.js - Intialize authentication method
  * 


Usage Example
```js

```

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
