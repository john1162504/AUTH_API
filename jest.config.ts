import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest/presets/default-esm", // ts-jest ESM preset
    testEnvironment: "node",

    extensionsToTreatAsEsm: [".ts"],

    transform: {
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
                tsconfig: "tsconfig.jest.json",
            },
        ],
    },

    transformIgnorePatterns: ["/node_modules/"],

    // NOTE: setupFilesAfterEnv is the proper key for ESM setup
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],

    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1", // handle .js imports in ESM
    },

    testMatch: ["**/src/tests/**/*.test.ts"], // ensure Jest finds your tests

    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/generated/**",
        "!src/main.ts",
        "!src/prisma/client.ts",
    ],
};

export default config;
