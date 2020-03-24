
const loadConfig = () => {
    let envConfig

    switch (process.env.NODE_ENV ) {
        case 'development':
            envConfig = {
                "AUTHORIZATION_URL": "http://localhost:8000/api-token-auth/",
            }
            break;
        case 'test':
            envConfig = {
                "AUTHORIZATION_URL": process.env['REACT_APP_AUTHORIZATION_URL'],
            }
            break;
        case 'production':
            envConfig = {
                "AUTHORIZATION_URL": process.env['REACT_APP_AUTHORIZATION_URL'],
            }
            break
        default:
            throw Error("Unsupported Build type")
    }

    return envConfig
}

export const ENV_CONFIG = loadConfig()
