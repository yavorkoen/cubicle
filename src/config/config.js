module.exports = {
    development: {
        port: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/cubes',
        // JWT_SECRET: 'emJk9qt2C`"l8.|SLrNU,Dd}u5VEAe>F+eE~?Nt85s9]/3&xC|b8~i$}V4%/y'
    },
    production: {
        // JWT_SECRET: 'emJk9qt2C`"l8.|SLrNU,Dd}u5VEAe>F+eE~?Nt85s9]/3&xC|b8~i$}V4%/y'

    }
};