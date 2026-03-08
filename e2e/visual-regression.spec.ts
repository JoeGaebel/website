import {test, expect} from "@playwright/test"

test.describe("Visual Regression", () => {
    test("home page", async ({page}) => {
        await page.goto("/")
        // Wait for fonts and images to load
        await page.waitForLoadState("networkidle")
        // Wait for the sliding interest text to appear
        await page.waitForTimeout(2000)
        await expect(page).toHaveScreenshot("home-full.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("blog listing", async ({page}) => {
        await page.goto("/blog")
        await page.waitForLoadState("networkidle")
        await expect(page).toHaveScreenshot("blog-listing.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("blog post", async ({page}) => {
        await page.goto("/blog/hello-world")
        await page.waitForLoadState("networkidle")
        // Wait for markdown content to load and mermaid to render
        await page.waitForTimeout(3000)
        await expect(page).toHaveScreenshot("blog-post.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })
})
