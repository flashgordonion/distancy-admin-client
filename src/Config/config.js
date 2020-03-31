
const loadConfig = () => {
    let envConfig

    switch (process.env.NODE_ENV ) {
        case 'development':
            envConfig = {
                "BACKEND_URL": "http://localhost:8000"
            }
            break;
        case 'test':
            envConfig = {
                "BACKEND_URL": process.env['REACT_APP_BACKEND_URL']
            }
            break;
        case 'production':
            envConfig = {
                "BACKEND_URL": process.env['REACT_APP_BACKEND_URL']
            }
            break
        default:
            throw Error("Unsupported Build type")
    }

    return envConfig
}

export const ENV_CONFIG = loadConfig()
