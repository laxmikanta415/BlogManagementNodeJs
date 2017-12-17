var config = {
    dev: 'development',
    prod: 'production',
    test: 'testing'
};

config.port = process.env.PORT || 3000;


module.exports = config;