import { defineConfig } from "vitest/config";

// Load .env.test for all tests
// dotenv.config({ path: path.resolve(__dirname, ".env.test") });

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        setupFiles: ["src/tests/setup.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            reportsDirectory: "./coverage",
            exclude: [
                "node_modules/",
                "dist/",
                "src/generated/",
                "**/*.d.ts",
                "**/*.config.*",
            ],
        },
    },
});
