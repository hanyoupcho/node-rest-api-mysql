# NaughtyRestAPI

Node.js REST API with MySQL

## Security
Packages
  * [cors](https://github.com/expressjs/cors) - A node.js package that provides an Express/Connect middleware to enable Cross Origin Resource Sharing (CORS) with various options.
    * [Access Control Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

libs/middlewares.js
```js
app.use(cors({
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Logging
Packages
  * [winston](https://github.com/winstonjs/winston) - a multi-transport async logging library for node.js
  * [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js

libs/logger.js
```js
module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/app.log',
      maxSize: 1048576,
      maxFiles: 10,
      colorize: false
    })
  ]
});
```

libs/config.?.js
```js
logging: (sql) => {
  logger.info(`[${new Date()}] ${sql}`);
},
```

libs/middlewares.js
```js
app.use(morgan('common', {
  stream: {
    write: (message) => {
      logger.info(message);
    }
  }
}));
```
