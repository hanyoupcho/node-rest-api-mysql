# Node.js REST API

REST API for Guideline iOS and Android App


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
