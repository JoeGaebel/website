import {defineConfig} from "@playwright/test"

export default defineConfig({
    testDir: "./e2e",
    snapshotPathTemplate: "{testDir}/__screenshots__/{projectName}/{testName}/{arg}{ext}",
    timeout: 30000,
    use: {
        baseURL: "http://localhost:4321",
        viewport: {width: 1280, height: 720},
    },
    projects: [
        {
            name: "desktop",
            use: {viewport: {width: 1280, height: 720}},
        },
        {
            name: "mobile",
            use: {viewport: {width: 375, height: 812}},
        },
    ],
    webServer: {
        command: "npm run dev",
        port: 4321,
        reuseExistingServer: true,
        timeout: 60000,
    },
})
