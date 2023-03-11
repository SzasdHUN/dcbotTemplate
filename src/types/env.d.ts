declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_TOKEN: string,
            TEST_GUILD: string,
            NODE_ENV: "prod" | "dev"
        }
    }
}

export {}