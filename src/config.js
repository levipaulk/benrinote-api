module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/benrinote',
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://postgres@localhost/benrinote',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
};