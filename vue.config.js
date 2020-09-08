const path = require('path');

module.exports = {
    chainWebpack: (config) => {
        config.plugin('define').tap((definitions) => {
            definitions[0]['process.env']['COUNTRY'] = JSON.stringify(process.env.COUNTRY);
            return definitions;
        });
    },
};