require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const corsOptions = require('./cors-whitelist');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const winston = require('winston');
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const userpubRouter = require('./userpub/userpub-router');
const pubRouter = require('./publications/publications-router');
const notesRouter = require('./notes/notes-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';


app.use(morgan(morganOption));
app.use(cors({origin: corsOptions}));
app.use(express.json());
app.use(helmet());

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
});

if(NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
};

// app.get('/', (req, res) => {
//     res.send('Hello, from the benrinote api!')
// });

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/userpub', userpubRouter)
app.use('/api/publications', pubRouter)
app.use('/api/notes', notesRouter)

app.use(function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }

    if(error.type === 'CORS') {
      res.status(403).end()
    }
    res.status(500).json(response)
    
});

module.exports = app;