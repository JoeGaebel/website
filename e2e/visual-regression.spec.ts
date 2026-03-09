import {test, expect} from "@playwright/test"

test.describe("Visual Regression", () => {
    test("home page", async ({page}) => {
        await page.goto("/")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(2000)
        await expect(page).toHaveScreenshot("home-full.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("home page - reviews expanded", async ({page}) => {
        await page.goto("/")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(2000)
        const seeMoreBtn = page.locator("#reviews button", {hasText: "See more"})
        await seeMoreBtn.scrollIntoViewIfNeeded()
        await seeMoreBtn.click()
        await page.waitForTimeout(2000)
        await expect(page).toHaveScreenshot("home-reviews-expanded.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("articles listing", async ({page}) => {
        await page.goto("/articles")
        await page.waitForLoadState("networkidle")
        await expect(page).toHaveScreenshot("articles-listing.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("article post", async ({page}) => {
        await page.goto("/articles/agentic-gold-standard-development")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(3000)
        await expect(page).toHaveScreenshot("article-post.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })
})
