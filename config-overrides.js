const rewireReactHotLoader = require('react-app-rewire-hot-loader')

// Hot-reload
module.exports = function override (config, env) {
    config.resolve = {
        alias: { 'react-dom': '@hot-loader/react-dom'  }
    };
    config = rewireReactHotLoader(config, env)
    return config
}